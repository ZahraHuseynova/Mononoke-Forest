import _ from 'lodash';
import { CREATE_CONTACT,FETCH_CONTACT,FETCH_CONTACTS,DELETE_CONTACT } from '../actions/types';


export const contactReducer = (state = { }, action)=>{
    switch (action.type){
        case FETCH_CONTACT:
        case CREATE_CONTACT:
            return { ...state, [action.payload.id]: action.payload};
        case DELETE_CONTACT:
            return _.omit (state, action.payload);
        case FETCH_CONTACTS:
            return {...state, ..._.mapKeys(action.payload,'id') };
        default:
            return state;
    }
}