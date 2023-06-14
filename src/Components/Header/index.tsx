import { HeaderContainer } from "./styles"
import { NavLink } from "react-router-dom"
import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import { useContext } from 'react'

import Logo from "../../Images/Logo.svg"
import { CoffeeDeliveryContext } from "../../Contexts/CoffeeDeliveryContext"

export function Header() {

    const { buyingCoffees } = useContext(CoffeeDeliveryContext)
    const quantityOfCoffees = () => {
        let sumQuantityOfCoffees = 0;
        buyingCoffees.map((coffee) => {
            sumQuantityOfCoffees = Number(coffee.quantity) + sumQuantityOfCoffees
        })
        return (
            <span>{sumQuantityOfCoffees}</span>     
        );
    }

    return(
        <HeaderContainer>
            <div>
                <NavLink to="/" className="Logo">
                    <img src={Logo} alt="Logo Coffee Delivery" />
                </NavLink>
            </div>
            <div>
                <span className="MapPin">
                    <MapPin size={32} weight="fill"/>
                    Porto Alegre, RS
                </span>
                <NavLink to="/Cart" className="Cart">
                    <ShoppingCart size={32} weight="fill"/>
                    {quantityOfCoffees()}
                </NavLink>
            </div>
        </HeaderContainer>
    )
}