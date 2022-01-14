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
    const {data} = await contact.post('/contact',formValue);

    dispatch ({ type: CREATE_CONTACT,payload: data});
};

export const fetchContacts = ( ) => async (dispatch)=>{
    const {data} = await contact.get('/contact');

    dispatch ({ type: FETCH_CONTACTS ,payload: data})
}

export const fetchContact = (id)=> async (dispatch)=>{
    const {data} =await contact.get(`/contact/${id}`)

    dispatch ({ type: FETCH_CONTACT,payload:data});
}

export const deleteContact =(id)=> async (dispatch)=>{
    const { data } = await contact.delete(`/contct/${id}`)

    dispatch ({type:DELETE_CONTACT,payload:data});
}

export const createCard = (formValue) => async (dispatch)=>{
    const { data } = await contact.post ('/giftcard',formValue)

    dispatch ({type:CREATE_CARD , payload:data});
}

export const fetchCards = () => async  (dispatch)=>{
    const { data } = await contact.get('/giftcard')

    dispatch ({ type:FETCH_CARDS, payload:data });
}

export const fetchCard = (id)=> async (dispatch)=>{
    const { data } = await contact.get(`/giftcard/${id}`)

    dispatch ({ type: FETCH_CARD, payload:data});
}

export const deleteCard = (id)=> async (dispatch)=>{
    const { data } = await contact.delete(`/giftcard/${id}`)

    dispatch ({type: DELETE_CARD, payload:data})
}

