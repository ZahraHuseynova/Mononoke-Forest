import _ from 'lodash';
import { FETCH_PLANT,FETCH_PLANTS,DELETE_PLANT } from '../actions/types';


export const plantsReducer = (state = { }, action)=>{
    switch (action.type){
        case FETCH_PLANT:
            return { ...state, [action.payload.id]: action.payload};
        case DELETE_PLANT:
            return _.omit (state, action.payload);
        case FETCH_PLANTS:
            return {...state, ..._.mapKeys(action.payload,'id') };
        default:
            return state;
    }
}