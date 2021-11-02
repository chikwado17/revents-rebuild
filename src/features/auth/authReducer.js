import { SIGN_IN, SIGN_OUT } from "./AuthConstants";


const initialState = {
    authenticated: false,
    currentUser: null
}


const authReducer = (state = initialState, action) => {
    switch(action.type) {

        case SIGN_IN:
            return {
                ...state,
                authenticated:true,
                currentUser: {
                    email: action.payload.email,
                    photoURL: '/assets/user.png'
                }
            }

        case SIGN_OUT: 
            return {
                ...state,
                authenticated:false,
                currentUser:null
            }


        default:
            return state;
    }
}

export default authReducer;