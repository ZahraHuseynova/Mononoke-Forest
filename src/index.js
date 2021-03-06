import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore,compose, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
document.getElementById('root'))