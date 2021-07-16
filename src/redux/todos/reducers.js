import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "./actionTypes";

const initialState = []

export const todos = ( state = initialState, {type, todo}) =>{
    switch (type) {
        case ADD_TODO:
            return [...state, todo]
        
        case REMOVE_TODO:
            return state.filter(({id}) => id !== todo.id)
        
        // case EDIT_TODO:
        //     return 
        default:
            return state
    }
}