import { ASYNC_ACTION_ERROR, ASYNC_ACTION_FINISH, ASYNC_ACTION_START } from "./asyncConstants";

const initialState = {
    loading: false,
    error: null
}


const asyncReducer = (state = initialState, action ) => {
    switch(action.type) {
        
        case ASYNC_ACTION_START:
            return {
                ...state,
                loading:true,
                error:null
            }

        case ASYNC_ACTION_FINISH:
            return {
                ...state,
                loading:false
            }
        
        case ASYNC_ACTION_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default asyncReducer;