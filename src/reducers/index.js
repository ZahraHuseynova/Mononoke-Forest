import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form';
import { contactReducer } from "./contactReducer";
import { cardReducer } from './cardReducer';
import { plantsReducer } from './plantsReducer';
import { subsReducer } from "./subsReducer";
import { paymentReducer } from "./paymentReducer";

export default combineReducers({
    auth:authReducer,
    form: formReducer,
    contact:contactReducer,
    card:cardReducer,
    plants:plantsReducer,
    subs:subsReducer,
    payment:paymentReducer
});