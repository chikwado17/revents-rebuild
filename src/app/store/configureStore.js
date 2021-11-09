import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk'

export const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    )

    return store;
}