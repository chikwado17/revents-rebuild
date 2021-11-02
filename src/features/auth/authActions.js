import { SIGN_IN, SIGN_OUT } from "./AuthConstants"


export const signInUser = (payload) => ({
    type: SIGN_IN,
    payload
});

export const signOutUser = () => ({
    type: SIGN_OUT
});