import { combineReducers } from 'redux';
import authReducer from '../../features/auth/authReducer';
import eventReducers from '../../features/events/eventReducers';
import testReducer from '../../features/playground/testReducer';
import asyncReducer from '../async/asyncReducer';
import ModalReducer from '../common/modal/ModalReducer';



const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducers,
    modal: ModalReducer,
    auth: authReducer,
    async: asyncReducer
});


export default rootReducer;
