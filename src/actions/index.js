import { SIGN_IN,SIGN_OUT,FETCH_CARD,FETCH_CARDS,FETCH_CONTACT,FETCH_CONTACTS,FETCH_PLANT,FETCH_PLANTS,
    CREATE_CARD,CREATE_CONTACT,EDIT_CARD,EDIT_PLANT,EDIT_CONTACT,DELETE_CARD,DELETE_PLANT,DELETE_CONTACT } from "./types"

import contact from "../apis/contact"

export const signIn =(userId)=>{
    return {
        type:SIGN_IN,
        payload:userId,
    }
}

export const signOut =()=>{
    return {
        type:SIGN_OUT,
    }
}

export const createContact = (formValue) => async (dispatch)=>{
    contact.post('/contact',formValue);
};