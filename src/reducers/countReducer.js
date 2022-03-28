import {ACTIONS} from '../actions/actions'

export const countReducer = (state, {type, cargo}) => {
    switch(type) {
        case ACTIONS.INCREMENT: 
            return state + cargo
            case ACTIONS.DECREMENT: 
            return state - cargo
            case ACTIONS.RESET: 
            return state = cargo
        default:
            return state
    }

}