import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react"
import { CoffeeCardContainer } from "./style.ts"
import { Coffee } from "../../../../Reducers/Coffees/Reducer.ts"

interface CoffeeCardProps extends Coffee {
    increaseDecreaseCoffeeQuantity: (name: string, type: "decrease" | "increase") => void
    addCoffeeToCart: (name: string) => void
}

export function CoffeeCard({image, description, name, price, tags, quantity, increaseDecreaseCoffeeQuantity, addCoffeeToCart}: CoffeeCardProps) {

    function decreaseQuantity() {
        increaseDecreaseCoffeeQuantity(name, "decrease")
    }

    function increaseQuantity() {
        increaseDecreaseCoffeeQuantity(name, "increase")
    }

    function addCoffeeToCartHandling() {
        addCoffeeToCart(name)
    }

    return(
        <CoffeeCardContainer>
            <img src={image} />
            <div className="Tags">
                {tags.map((tag) => {
                    return(
                        <span key={tag}>{tag}</span>
                    )
                })}
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="PriceAndQuantity">
                <h6><span>R$</span>{price.replace(".", ",")}</h6>
                <div>
                    <span>
                        <button><Minus size={14} weight="bold" onClick={decreaseQuantity}/></button>
                        <p>{quantity}</p>
                        <button><Plus size={14} weight="bold" onClick={increaseQuantity}/></button>
                    </span>
                    <button onClick={addCoffeeToCartHandling}><ShoppingCart size={22} weight="fill"/></button>
                </div>
            </div>
        </CoffeeCardContainer>
    )
}