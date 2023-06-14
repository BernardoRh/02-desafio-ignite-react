import { produce } from 'immer'
import { ActionTypes } from "./Actions"

export interface BaseCoffeeInfo {
    name: string,
    image: string,
    price: string,
    quantity: string,
}

export interface Coffee extends BaseCoffeeInfo {
    tags: string[],
    description: string
}

export interface CustomerInfo {
    postalCode: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    paymentWay: "none" | "creditCard" | "debitCard" | "cash";
}

interface CoffeeState {
    buyingCoffees: BaseCoffeeInfo[],
    customerInfo: CustomerInfo
}

export function CoffeesReducer(state: CoffeeState, action: any) {
    switch(action.type){

        case ActionTypes.ADD_COFFEE_CART: {
            return produce(state, (draft) => {
                const alreadyHasInCart: boolean = draft.buyingCoffees.find((coffee) => {
                    if(action.payload.coffeeToAdd.name == coffee.name){
                        return true
                    }
                }) ? true : false

                if(alreadyHasInCart){
                    draft.buyingCoffees.map((coffee) => {
                        if(action.payload.coffeeToAdd.name == coffee.name){
                            coffee.quantity = String(Number(coffee.quantity) + Number(action.payload.coffeeToAdd.quantity))
                        }
                    })
                } else {
                    draft.buyingCoffees.push(action.payload.coffeeToAdd)
                }
                
            })
        }

        case ActionTypes.INCREASE_DECREASE_COFFEE_QUANTITY: {
            return produce(state, (draft) => {
                draft.buyingCoffees.map((coffee) => {
                    if(coffee.name == action.payload.coffeeToChange){
                        if(action.payload.decreaseIncrease == "increase") {
                            coffee.quantity = String(Number(coffee.quantity) + 1)
                        } else if (!(Number(coffee.quantity) <= 1) && action.payload.decreaseIncrease == "decrease") {
                            coffee.quantity = String(Number(coffee.quantity) - 1)
                        }
                    }
                })
            })
        }

        case ActionTypes.REMOVE_COFFEE_CART: {
            return produce(state, (draft) => {
                const withoutCoffee: BaseCoffeeInfo[] = []
                draft.buyingCoffees.map((coffee) => {
                    if(coffee.name != action.payload.coffeeToRemove) {
                        withoutCoffee.push(coffee)
                    }
                })
                draft.buyingCoffees = withoutCoffee
            })
        }

        case ActionTypes.FINISH_BUYING: {
            return produce(state, (draft) => {
                draft.customerInfo = action.payload.data
                draft.buyingCoffees = []
            })
        }

        default: {
            return state
        }
    }
}