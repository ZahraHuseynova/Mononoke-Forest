import { CREATE_PAYMENT } from '../actions/types';


export const paymentReducer = (state = { }, action)=>{
    switch (action.type){
        case CREATE_PAYMENT:
            return { ...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}