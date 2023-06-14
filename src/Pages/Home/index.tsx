import { HomeContainer, MainContainer, CoffeesContainer } from "./style"
import HomeImage from "../../Images/CoffeeCupIlustration.png"
import Background from "../../Images/BackgroundMain.png"
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"
import { CoffeeCard } from "./Components/CoffeeCard"
import { CoffeeImages } from "../../Assets/CoffeeImages"
import { Coffee as CoffeeInterface } from "../../Reducers/Coffees/Reducer"
import { useContext, useState } from "react"
import { produce } from "immer"
import { CoffeeDeliveryContext } from "../../Contexts/CoffeeDeliveryContext"

export function Home() {

    const { addCoffeeCart } = useContext(CoffeeDeliveryContext)

    const [coffees, setCoffees] = useState([
        {
            name: "Americano",
            image: CoffeeImages["Americano"],
            price: "9.90",
            tags: ["TRADICIONAL", "COM LEITE", "ESPECIAL", "ALCOÓLICO", "GELADO"],
            quantity: "1",
            description: "O tradicional café feito com água quente e grãos moídos"
        },
        {
            name: "Arabe",
            image: CoffeeImages["Arabe"],
            price: "9.90",
            tags: ["TRADICIONAL", "COM LEITE", "ESPECIAL", "ALCOÓLICO", "GELADO"],
            quantity: "1",
            description: "Expresso diluído, menos intenso que o tradicional"
        },
        {
            name: "Cafe com Leite",
            image: CoffeeImages["Cafe_com_leite"],
            price: "9.90",
            tags: ["TRADICIONAL", "COM LEITE", "ESPECIAL", "ALCOÓLICO", "GELADO"],
            quantity: "1",
            description: "Café expresso tradicional com espuma cremosa"
        },
        {
            name: "Cafe Gelado",
            image: CoffeeImages["Cafe_Gelado"],
            price: "9.90",
            tags: ["TRADICIONAL", "COM LEITE", "ESPECIAL", "ALCOÓLICO", "GELADO"],
            quantity: "1",
            description: "Bebida preparada com café expresso e cubos de gelo"
        },
        {
            name: "Capuccino",
            image: CoffeeImages["Capuccino"],
            price: "9.90",
            tags: ["TRADICIONAL", "COM LEITE", "ESPECIAL", "ALCOÓLICO", "GELADO"],
            quantity: "1",
            description: "Meio a meio de expresso tradicional com leite vaporizado"
        },
        {
            name: "Chocolate Quente",
            image: CoffeeImages["Chocolate_Quente"],
            price: "9.90",
            tags: ["TRADICIONAL", "COM LEITE", "ESPECIAL", "ALCOÓLICO", "GELADO"],
            quantity: "1",
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa"
        },
        {
            name: "Cubano",
            image: CoffeeImages["Cubano"],
            price: "9.90",
            tags: ["TRADICIONAL", "COM LEITE", "ESPECIAL", "ALCOÓLICO", "GELADO"],
            quantity: "1",
            description: "Bebida com canela feita de doses iguais de café, leite e espuma"
        },
        {
            name: "Expresso Cremoso",
            image: CoffeeImages["Expresso_Cremoso"],
            price: "9.90",
            tags: ["TRADICIONAL", "COM LEITE", "ESPECIAL", "ALCOÓLICO", "GELADO"],
            quantity: "1",
            description: "Café expresso misturado com um pouco de leite quente e espuma"
        },
        {
            name: "Expresso",
            image: CoffeeImages["Expresso"],
            price: "9.90",
            tags: ["TRADICIONAL", "COM LEITE", "ESPECIAL", "ALCOÓLICO", "GELADO"],
            quantity: "1",
            description: "Café expresso com calda de chocolate, pouco leite e espuma"
        },
        {
            name: "Havaiano",
            image: CoffeeImages["Havaiano"],
            price: "9.90",
            tags: ["TRADICIONAL", "COM LEITE", "ESPECIAL", "ALCOÓLICO", "GELADO"],
            quantity: "1",
            description: "Bebida feita com chocolate dissolvido no leite quente e café"
        },
        {
            name: "Irlandes",
            image: CoffeeImages["Irlandes"],
            price: "9.90",
            tags: ["TRADICIONAL", "COM LEITE", "ESPECIAL", "ALCOÓLICO", "GELADO"],
            quantity: "1",
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã"
        },
        {
            name: "Latte",
            image: CoffeeImages["Latte"],
            price: "9.90",
            tags: ["TRADICIONAL", "COM LEITE", "ESPECIAL", "ALCOÓLICO", "GELADO"],
            quantity: "1",
            description: "Bebida adocicada preparada com café e leite de coco"
        },
        {
            name: "Macchiato",
            image: CoffeeImages["Macchiato"],
            price: "9.90",
            tags: ["TRADICIONAL", "COM LEITE", "ESPECIAL", "ALCOÓLICO", "GELADO"],
            quantity: "1",
            description: "Bebida preparada com grãos de café árabe e especiarias"
        },
        {
            name: "Mochaccino",
            image: CoffeeImages["Mochaccino"],
            price: "9.90",
            tags: ["TRADICIONAL", "COM LEITE", "ESPECIAL", "ALCOÓLICO", "GELADO"],
            quantity: "1",
            description: "Bebida a base de café, uísque irlandês, açúcar e chantilly"
        },
    ] as CoffeeInterface[])

    function increaseDecreaseCoffeeQuantity(name: string, type: "decrease" | "increase" ) {
        const newCoffees = produce(coffees, (draft) => {
            draft.map((coffee) => {
                if(coffee.name == name) {
                    if(type == "decrease"){
                        if(coffee.quantity <= "1"){}
                        else {
                            coffee.quantity = String(Number(coffee.quantity) - 1)
                        }
                    } else if ("increase") {
                        coffee.quantity = String(Number(coffee.quantity) + 1)
                    }
                }
            })
            return draft
        })
        setCoffees(newCoffees)
    }

    function resetCoffe(name: string) {
        const newCoffees = produce(coffees, (draft) => {
            draft.map((coffee) => {
                if(coffee.name == name) {
                    coffee.quantity = "1"
                }
            })
            return draft
        })
        setCoffees(newCoffees)
    }

    function addCoffeeToCart(name: string) {
        coffees.map((coffee) => {
            if(coffee.name == name) {
                addCoffeeCart({
                    name: coffee.name,
                    image: coffee.image,
                    price: coffee.price,
                    quantity: coffee.quantity
                })
            }
        })
        resetCoffe(name)
    }

    return(
        <HomeContainer>
            <MainContainer>
                <main>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </main>
                <div className="Seals">
                    <div>
                        <span className="ShoppingCart">
                            <ShoppingCart size={16} weight="fill" />
                        </span>
                        <p>Compra simples e segura</p>
                    </div>
                    <div>
                        <span className="Package">
                            <Package size={16} weight="fill" />
                        </span>
                        <p>Embalagem mantém o café intacto</p>
                    </div>
                    <div>
                        <span className="Timer">
                            <Timer size={16} weight="fill" />
                        </span>
                        <p>Entrega rápida e rastreada</p>
                    </div>
                    <div>
                        <span className="Coffee">
                            <Coffee size={16} weight="fill" />
                        </span>
                        <p>O café chega fresquinho até você</p>
                    </div>
                </div>
                <img src={HomeImage} className="HomeImage"/>
                <img src={Background} className="Background" />
            </MainContainer>
            <CoffeesContainer>
                <div className="TypeOfCoffees">
                    <h2>Nossos cafés</h2>
                </div>
                <div className="TypeOfCoffees">
                    {coffees.map((coffee) => {
                        return(
                            <CoffeeCard
                                key={coffee.name + coffee.description}
                                image={coffee.image}
                                price={coffee.price}
                                name={coffee.name}
                                tags={coffee.tags}
                                description={coffee.description}
                                quantity={coffee.quantity}
                                increaseDecreaseCoffeeQuantity={increaseDecreaseCoffeeQuantity}
                                addCoffeeToCart={addCoffeeToCart}
                            />
                        )
                    })}
                </div>
            </CoffeesContainer>
        </HomeContainer>
    )
} 