import { BaseCoffeeInfo, CustomerInfo } from "./Reducer"


export enum ActionTypes {
    ADD_COFFEE_CART = "ADD_COFFEE_CART",
    REMOVE_COFFEE_CART = "REMOVE_COFFEE_CART",
    FINISH_BUYING = "FINISH_BUYING",
    INCREASE_DECREASE_COFFEE_QUANTITY = "INCREASE_DECREASE_COFFEE_QUANTITY",
}


export function increaseDecreaseCoffeeQuantityAction(coffeeToChange: string, decreaseIncrease: "increase" | "decrease") {
    return {
        type: ActionTypes.INCREASE_DECREASE_COFFEE_QUANTITY,
        payload: {
            coffeeToChange,
            decreaseIncrease
        }
    }
}

export function addCoffeeCartAction(coffeeToAdd: BaseCoffeeInfo) {
    return {
        type: ActionTypes.ADD_COFFEE_CART,
        payload: {
            coffeeToAdd
        }
    }
}

export function removeCoffeeCartAction(coffeeToRemove: string) {
    return {
        type: ActionTypes.REMOVE_COFFEE_CART,
        payload: {
            coffeeToRemove
        }
    }
}

export function finishBuyingAction(data: CustomerInfo) {
    console.log("ue")
    return {
        type: ActionTypes.FINISH_BUYING,
        payload: {
            data
        }
    }
}