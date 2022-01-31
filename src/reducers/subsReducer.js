import _ from 'lodash';
import { FETCH_SUBS } from '../actions/types';


export const subsReducer = (state = { }, action)=>{
    switch (action.type){
        case FETCH_SUBS:
            return {...state, ..._.mapKeys(action.payload,'id') };
        default:
            return state;
    }
}