import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { BaseCoffeeInfo } from "../../../../Reducers/Coffees/Reducer";
import { CoffeeCardRowContainer } from "./style";
import { useContext } from "react";
import { CoffeeDeliveryContext } from "../../../../Contexts/CoffeeDeliveryContext";

interface CoffeeCardProps {
    coffee: BaseCoffeeInfo
}

export function CoffeeCard({coffee}: CoffeeCardProps) {

    const { increaseDecreaseCoffeeQuantity, removeCoffeeCart} = useContext(CoffeeDeliveryContext)


    function decreaseQuantity() {
        increaseDecreaseCoffeeQuantity(coffee.name, "decrease")
    }

    function increaseQuantity() {
        increaseDecreaseCoffeeQuantity(coffee.name, "increase")
    }

    function handleRemoveCoffeeCart () {
        removeCoffeeCart(coffee.name)
    }

    return(
        <CoffeeCardRowContainer>
            <img src={coffee.image} />
            <div>
                <p>{coffee.name}</p>
                <div>
                    <span>
                        <button type="button"><Minus size={14} weight="bold" onClick={decreaseQuantity}/></button>
                            <p>{coffee.quantity}</p>
                        <button type="button"><Plus size={14} weight="bold" onClick={increaseQuantity}/></button>
                    </span>
                    <button type="button" onClick={handleRemoveCoffeeCart}><Trash size={14} />REMOVER</button>
                </div>
            </div>
            <p>R$ {coffee.price}</p>
        </CoffeeCardRowContainer>
    )
}