import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form';
import { contactReducer } from "./contactReducer";
import { cardReducer } from './cardReducer';

export default combineReducers({
    auth:authReducer,
    form: formReducer,
    contact:contactReducer,
    card:cardReducer
});