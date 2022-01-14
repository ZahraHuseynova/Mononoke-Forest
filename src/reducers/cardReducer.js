import _ from 'lodash';
import { CREATE_CARD, FETCH_CARD,FETCH_CARDS,DELETE_CARD } from '../actions/types';


export const cardReducer = (state = { }, action)=>{
    switch (action.type){
        case FETCH_CARD:
        case CREATE_CARD:
            return { ...state, [action.payload.id]: action.payload};
        case DELETE_CARD:
            return _.omit (state, action.payload);
        case FETCH_CARDS:
            return {...state, ..._.mapKeys(action.payload,'id') };
        default:
            return state;
    }
};