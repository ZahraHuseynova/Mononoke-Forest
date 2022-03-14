import { SIGN_IN,SIGN_OUT,FETCH_CARD,FETCH_CARDS,FETCH_CONTACT,FETCH_CONTACTS,FETCH_PLANT,FETCH_PLANTS,
    CREATE_CARD,CREATE_CONTACT,DELETE_CARD,DELETE_PLANT,DELETE_CONTACT,FETCH_SUBS,CREATE_PAYMENT,ADD_TO_CART,ADJUST_QTY,REMOVE_FROM_CART } from "./types"

import contact from "../apis/contact"
import history from "../history"


export const signIn =(userId)=>{
    return {
        type:SIGN_IN,
        payload:userId,
    }
}

export const signOut = ()=>{
    return {
        type:SIGN_OUT,
    }
}

export const createContact = (formValue) => async (dispatch, getState)=>{
    const { userId} = getState().auth;
    const {data} = await contact.post('/contact',{...formValue, userId});

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
    const { data } = await contact.delete(`/contact/${id}`)

    dispatch ({type:DELETE_CONTACT,payload:data});
    history.push('/deletepage')
}

export const createCard = (formValue) => async (dispatch,getState)=>{
    const { userId} = getState().auth;
    const status = 1;
    const { data } = await contact.post ('/giftcard',{...formValue,userId,status})

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
    history.push('/');
}

export const fetchPlants = ( ) => async (dispatch)=>{
    const {data} = await contact.get('/plants');

    dispatch ({ type: FETCH_PLANTS ,payload: data})
}

export const fetchPlant = (id)=> async (dispatch)=>{
    const {data} =await contact.get(`/plants/${id}`)

    dispatch ({ type: FETCH_PLANT,payload:data});
}

export const deletePlant =(id)=> async (dispatch)=>{
    const { data } = await contact.delete(`/plants/${id}`)

    dispatch ({type:DELETE_PLANT,payload:data});
    history.push('/')
}

export const fetchSubs = ( ) => async (dispatch)=>{
    const {data} = await contact.get('/subs');

    dispatch ({ type: FETCH_SUBS ,payload: data})
}

export const createPayment = (formValue) => async (dispatch)=>{
    const { data } = await contact.post ('/payment',formValue)

    dispatch ({type:CREATE_PAYMENT , payload:data});
}

export const addToCart = (id)=>async(dispatch, getState)=>{
    console.log("addToCart ACTION")
    const { data } = await contact.get(`/plants/${id}`);
    console.log(data);
    dispatch({
        type: ADD_TO_CART, 
        payload:{
            ...data,
            state: {...getState()}
        }})
}

export const removeFromCart=(id)=>async(dispatch)=>{
    const { data } = await contact.delete(`/plants/${id}`);

    dispatch({ type:REMOVE_FROM_CART, payload:data})
}

export const adjustQty= (id,value)=> async(dispatch)=>{
    const { data } = await contact.patch(`/plants/${id}`,value);

    dispatch({type:ADJUST_QTY, payload:data});
}
