import { combineReducers } from 'redux';
import eventReducers from '../../features/events/eventReducers';
import testReducer from '../../features/playground/testReducer';



const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducers
});


export default rootReducer;
