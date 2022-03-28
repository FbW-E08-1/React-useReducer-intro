import { ACTIONS } from "../actions/actions"

export const textReducer = (text, {type, cargo}) => {
    const {GRAB, RESET} = ACTIONS

    switch(type) {
        case GRAB:
            return text = cargo
        case RESET:
            return text = ''
        default: 
        return text
    }
}