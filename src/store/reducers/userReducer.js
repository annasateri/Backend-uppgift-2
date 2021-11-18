import actiontypes from '../actiontypes';

let initState = {
    loggedIn: false,
    oneUser: null,
    getUser: null
}

const userReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().users.loggedIn:
            return {
                ...state,
                loggedIn: action.payload
            }
        case actiontypes().users.oneUser:
            return {
                ...state,
                oneUser: action.payload
            }
        case actiontypes().users.setUsers:
            return {
                ...state,
                users: action.payload
            }
        case actiontypes().users.getUser:
            return {
                ...state,
                getUser: action.payload
            }
        default:
            return state
    }
}




export default userReducer