import { ReactNode, createContext, useEffect, useReducer } from "react"
import { CoffeesReducer, CustomerInfo, BaseCoffeeInfo } from "../Reducers/Coffees/Reducer"
import { addCoffeeCartAction, finishBuyingAction, increaseDecreaseCoffeeQuantityAction, removeCoffeeCartAction } from "../Reducers/Coffees/Actions"

interface CoffeeContextTypes {
    buyingCoffees: BaseCoffeeInfo[],
    customerInfo: CustomerInfo,
    addCoffeeCart: (coffeeToAdd: BaseCoffeeInfo) => void,
    increaseDecreaseCoffeeQuantity: (coffeeToChange: string, decreaseIncrease: "increase" | "decrease") => void,
    removeCoffeeCart: (coffeeToRemove: string) => void,
    finishBuying: (data: CustomerInfo) => void,
}

export const CoffeeDeliveryContext = createContext({} as CoffeeContextTypes)

interface CoffeeDeliveryContextProviderProps {
    children: ReactNode
}

export function CoffeeDeliveryContextProvider({children}: CoffeeDeliveryContextProviderProps) {

    const [coffeesState, dispatch] = useReducer(
        CoffeesReducer,
        {
            buyingCoffees: [],
            customerInfo: {
                postalCode: "",
                street: "",
                number: "",
                complement: "",
                neighborhood: "",
                city: "",
                state: "",
                paymentWay: "none",
            },
        },
        () => {
            const storedStateJSON = localStorage.getItem(
                '@ignite-challenge:coffee-state-1.0.0',
            )

            if(storedStateJSON) {
                return (JSON.parse(storedStateJSON))
            }

            return {
                buyingCoffees: [] as BaseCoffeeInfo[],
                customerInfo: {
                    postalCode: "",
                    street: "",
                    number: "",
                    complement: "",
                    neighborhood: "",
                    city: "",
                    state: "",
                    paymentWay: "none",
                } as CustomerInfo,
            }
        },
    )
    
    const { customerInfo, buyingCoffees } = coffeesState

    function addCoffeeCart(coffeeToAdd: BaseCoffeeInfo) {
        dispatch(addCoffeeCartAction(coffeeToAdd))
    }

    function increaseDecreaseCoffeeQuantity(coffeeToChange: string, decreaseIncrease: "increase" | "decrease") {
        dispatch(increaseDecreaseCoffeeQuantityAction(coffeeToChange, decreaseIncrease))
    }

    function removeCoffeeCart(coffeeToRemove: string){
        dispatch(removeCoffeeCartAction(coffeeToRemove))
    }

    function finishBuying(data: CustomerInfo) {
        dispatch(finishBuyingAction(data))
    }

    useEffect(() => {
        const StateJSON = JSON.stringify(coffeesState)
        localStorage.setItem('@ignite-challenge:coffee-state-1.0.0', StateJSON)
      }, [coffeesState])

    return(
        <CoffeeDeliveryContext.Provider value={{
            customerInfo,
            buyingCoffees,
            addCoffeeCart,
            increaseDecreaseCoffeeQuantity,
            removeCoffeeCart,
            finishBuying,
        }}>
            {children}
        </CoffeeDeliveryContext.Provider>
    )
}