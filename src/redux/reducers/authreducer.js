const initialStore = {
    id:"",
    email:"",
    loggedIn:false
}

const authReducer = (state = initialStore, action) => {
    switch(action.type){
        case "LOG_IN":
            return {
                ...state,
                ...action.payload,
                loggedIn:true
            }
        case "LOG_OUT":
            return {
                ...state,
                ...initialStore,
                loggedIn:false
            }
        default:
            return state
    }
}
export default authReducer;