import { DeliveryContainer } from "./style";
import Illustration from "./../../Images/Illustration.png"
import { Clock, CurrencyDollar, MapPin } from "@phosphor-icons/react";
import { useContext } from "react";
import { CoffeeDeliveryContext } from "../../Contexts/CoffeeDeliveryContext";

export function Delivery() {

    const { customerInfo } = useContext(CoffeeDeliveryContext)

    const payment = () => {
        switch(customerInfo.paymentWay){
            case "cash":
                return "Dinheiro"
            case "creditCard":
                return "Cartão de Crédito"
            case "debitCard":
                return "Cartão de Débito"
            default:
                "Nada"
        }
    }

    return(
        <DeliveryContainer>
            <div className="header">
                <h4>Uhu! Pedido confirmado</h4>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </div>
            <span></span>
            <div className="info">
                <div>
                    <div>
                        <span className="icon" id="map"><MapPin size={20} weight="fill"/></span>
                        <span>
                            <p>Entrega em <strong>{customerInfo.street}, {customerInfo.number}</strong></p>
                            <p>{customerInfo.neighborhood} - {customerInfo.city}, {customerInfo.state}</p>
                        </span>
                    </div>
                    <div>
                        <span className="icon" id="clock"><Clock size={20} weight="fill"/></span>
                        <span>
                            <p>Previsão de entrega</p>
                            <strong>20 min - 30 min</strong>
                        </span>
                    </div>
                    <div>
                        <span className="icon" id="dollar"><CurrencyDollar size={20}/></span>
                        <span>
                            <p>Pagamento na entrega</p>
                            <p><strong>{String(payment())}</strong></p>
                        </span>
                    </div>
                </div>
            </div>
            <img src={Illustration} alt="" />
        </DeliveryContainer>
    )
} 