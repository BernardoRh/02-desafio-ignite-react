import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { CartCoffeesContainer, CartContainer, FormContainer, PaymentWayContainer } from "./style";
import { useContext, useState } from 'react';
import InputMask from "react-input-mask";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { CoffeeDeliveryContext } from "../../Contexts/CoffeeDeliveryContext";
import { CoffeeCard } from "./Components/CoffeeCardRow";
import { useNavigate } from "react-router-dom";
import { CustomerInfo } from "../../Reducers/Coffees/Reducer";

export const newCustomerInfoFormValidationSchema = zod.object({
    postalCode: zod.string(zod.number().nonnegative()).length(9),
    street: zod.string().min(5, "Informe a Rua"),
    number: zod.string().min(1, "Informe a Número"),
    complement: zod.string(),
    neighborhood: zod.string().min(5, "Informe o Bairro"),
    city: zod.string().min(5, "Informe a Cidade"),
    state: zod.string().min(2, "Informe o Estado").max(2, "Informe o Estado Abreviado"),
})

export function Cart() {

    const navigate = useNavigate();

    const { buyingCoffees, finishBuying } = useContext(CoffeeDeliveryContext)

    type newCustomerInfoFormData = zod.infer<typeof newCustomerInfoFormValidationSchema>

    const newCustomerInfo = useForm({
        resolver: zodResolver(newCustomerInfoFormValidationSchema),
        defaultValues: {
            postalCode: "",
            street: "",
            number: "",
            complement: "",
            neighborhood: "",
            city: "",
            state: "",
        },
    })

    const { watch, register, handleSubmit, reset } = newCustomerInfo

    const city = watch('city')
    const neighborhood = watch('neighborhood')
    const number = watch('number')
    const postalCode = watch('postalCode')
    const complement = watch('complement')
    const state = watch('state')
    const street = watch('street')

    const [ typeOfPayment, setTypeOfPayment ] = useState< "none" | "creditCard" | "debitCard" | "cash" >("none")

    function handelSubmitForm(data: newCustomerInfoFormData) {
        const customerInfo: CustomerInfo = {
            postalCode: data.postalCode,
            street: data.street,
            number: data.number,
            complement: data.complement,
            neighborhood: data.neighborhood,
            city: data.city,
            state: data.state,
            paymentWay: typeOfPayment
        }
        finishBuying(customerInfo)
        reset()
        navigate("/Delivery")
    }

    const isSubmitDisabled = !city || !neighborhood || !number || !postalCode ||
    isNaN(+String(postalCode.slice(0, 5) + postalCode.slice(6, 9))) || 8 > String(postalCode).length ||
    !state || !street || typeOfPayment == "none" || !buyingCoffees || buyingCoffees.length == 0

    const [ spanComplement, setSpanComplement ] = useState<false | true>()
    function disableSpanComplement() {
        setSpanComplement(true)
    }
    function anabelSpanComplement() {
        setSpanComplement(false)
    }

    function priceForCoffeesCalculation() {
        let price = 0
        for(let i = 0; i < buyingCoffees.length; i++) {
            price = price + (Number(buyingCoffees[i].price) * Number(buyingCoffees[i].quantity))
        }
        return price
    }

    const PriceCoffees = priceForCoffeesCalculation()
    const totalToPay = isNaN(Number(PriceCoffees)) ? "0,00" : Number(PriceCoffees).toFixed(2).replace(".", ",")

    return(
        <CartContainer onSubmit={handleSubmit(handelSubmitForm)} >
            <FormContainer>
                <h4>Complete seu pedido</h4>
                <div>
                    <div className="FormHeader">
                        <MapPinLine size={22} weight="fill" />
                        <div>
                            <span>Endereço de Entrega</span>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>
                    <div className="FormBody">
                        <InputMask mask={"99999-999"} type="text" placeholder="CEP" {...register('postalCode')} />
                        <input type="text" placeholder="Rua" id="street" {...register('street')}/>
                        <input type="number" placeholder="Número" id="number" {...register('number')}/>
                        <label id="complement" >
                            <span className={complement || spanComplement ? "hide" : ""}>Opcional</span>
                            <input
                                id="complementInput"
                                type="text"
                                placeholder="Complemento"
                                {...register('complement')}
                                onFocus={disableSpanComplement}
                                onBlur={anabelSpanComplement}
                            />
                        </label>
                        <input type="text" placeholder="Bairro" id="neighborhood" {...register('neighborhood')}/>
                        <input type="text" placeholder="Cidade" id="city" {...register('city')}/>
                        <input type="text" placeholder="UF" id="state" {...register('state')}/>
                    </div>
                </div>
                <PaymentWayContainer>
                    <div className="PaymentHeader">
                        <CurrencyDollar size={22} weight="regular" />
                        <div>
                            <span>Pagamento</span>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </div>
                    <div className="PaymentMethods" >
                        <button
                            type="button"
                            name="creditCard"
                            value={typeOfPayment == "creditCard" ? "selected" : "notSelected"}
                            onClick={() => {setTypeOfPayment("creditCard")}}
                        >
                            <CreditCard size={16} weight="regular" />
                            CARTÃO DE CRÉDITO
                        </button>
                        <button
                            type="button"
                            name="debitCard"
                            value={typeOfPayment == "debitCard" ? "selected" : "notSelected"}
                            onClick={() => {setTypeOfPayment("debitCard")}}
                        >
                            <Bank size={16} weight="regular" />
                            CARTÃO DE DÉBITO
                        </button>
                        <button
                            type="button"
                            name="cash"
                            value={typeOfPayment == "cash" ? "selected" : "notSelected"}
                            onClick={() => {setTypeOfPayment("cash")}}
                        >
                            <Money size={16} weight="regular" />
                            DINHEIRO
                        </button>
                    </div>
                </PaymentWayContainer>
            </FormContainer>
            <CartCoffeesContainer>
                <h4>Cafés selecionados</h4>
                <div>
                    <div>
                        {buyingCoffees.map((coffee) => {
                            return(
                                <CoffeeCard key={coffee.name} coffee={coffee}/>
                            )
                        })}
                    </div>
                    <div className="PaymentAmount">
                        <div>
                            <span>Total de itens</span><span>R$ {isNaN(Number(PriceCoffees)) ? "0,00" : Number(PriceCoffees).toFixed(2).replace(".", ",")}</span>
                        </div>
                        <div>
                            <span>Entrega</span><span>R$ 3,50</span>
                        </div>
                        <div className="Total">
                            <span>Total</span><span>R$ {totalToPay}</span>
                        </div>
                        <button
                            type="submit"
                            className={"submitButton"}
                            disabled={isSubmitDisabled}
                        >
                            COMFIRMAR PEDIDO
                        </button>
                    </div>
                </div>
            </CartCoffeesContainer>
        </CartContainer>
    )
} 