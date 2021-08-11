import { GET_PRODUCTS, GET_QUESTIONS } from "../types";

const initialState ={
    products:[],
    questions:[]
}

export default function(state = initialState, action){
    switch (action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        case GET_QUESTIONS:
            return{
                ...state,
                questions: action.payload
            }

        default:
            return state
    }
}