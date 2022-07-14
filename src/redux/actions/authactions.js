import axios from "axios";

const logInAC = (userdata) => ({
    type:"LOG_IN",
    payload:userdata
})
const logOutAC = () => ({
    type: "LOG_OUT"
})

export const setUserLoggedIn = () => {
    return function (dispatch)
    {
        dispatch(logInAC({id:'API1686', email:'prabhanjank3@gmail.com'}));
    }
}
export const setUserLoggedOut = () => {
    return function (dispatch){
        dispatch(logOutAC());
    }
}