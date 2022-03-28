import { ACTIONS } from "../actions/actions";

export const addToArrayReducer = (array, {type, cargo}) => {
    switch(type) {
        case ACTIONS.ADD:
            return [...array, cargo]
            //return array.push(cargo)
        case ACTIONS.RESET:
            return array = []
        default:
            return array
    }


}