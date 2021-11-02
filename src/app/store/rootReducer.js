import { combineReducers } from 'redux';
import authReducer from '../../features/auth/authReducer';
import eventReducers from '../../features/events/eventReducers';
import testReducer from '../../features/playground/testReducer';
import ModalReducer from '../common/modal/ModalReducer';



const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducers,
    modal: ModalReducer,
    auth: authReducer
});


export default rootReducer;
