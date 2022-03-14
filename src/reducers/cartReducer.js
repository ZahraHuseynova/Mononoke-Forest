import _ from 'lodash';
import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QTY } from '../actions/types';

export const cartReducer = (state = {}, action)=>{
    console.log("SOME TYPE")
    switch (action.type){
        case ADD_TO_CART:
            console.log("ADD_TO_CART TYPE")
            console.log(action)
            const plant = action.payload.state.plants?.find(plant=>plant.id === action.payload.id);
            const inCart = action.payload.state.cart?.some(plant=>plant.id === action.payload.id)
            console.log(plant, inCart);
            return;
            // return {...state,[action.payload.id]: action.payload};
            return { ...state, 
                cart:inCart? state.cart.map(plant=>plant.id === action.payload.id
                    ? {...plant, qty: plant+1}: plant)
                    : [...state.cart,{...plant,qty:1}],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart:state.cart.filter((item)=>item.id !== action.payload.id),
            };
        case ADJUST_QTY:
            return {...state, 
            cart:state.cart.map(plant=>plant.id === action.payload.id ? {...plant,qty:action.payload.qty}:plant) };
        default:
            return state;
    }
}

/*
const array = [1,2,3,4,4,5,6,7];
array.filter(item => item > 4); // returns array [5, 6, 7]
array.map(item => item + 2) // returns edited array [3, 4, 5, 6, 6, 7, 8, 9]
array.find(item => item > 4) // returns 5
array.some(item => item > 5) // true
*/