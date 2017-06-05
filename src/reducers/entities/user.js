import {combineReducers} from 'redux'
import * as states from '../states'
import {createFetchListReducer} from "../list";
import {createFetchSyncReducer} from "../sync";

const loginReducer = function (state = states.LOGGED_OUT, action) {
    switch (action.type) {
        case "LOGIN_PENDING":
            return states.LOGGING_IN;
        case "LOGIN_FULFILLED":
            return states.LOGGED_IN;
        case "LOGIN_REJECTED":
            return states.LOGGED_OUT;
        case "LOGOUT_PENDING":
            return states.LOGGING_OUT;
        case "LOGOUT_FULFILLED":
            return states.LOGGED_OUT;
        case "LOGOUT_REJECTED":
            return states.LOGGED_IN;
        default:
            return state;
    }
};

export default combineReducers({
    loginState: loginReducer,
    userGroupPerms: createFetchListReducer("userGroupPerms"),
    username: createFetchSyncReducer("username"),
    groupsList: createFetchSyncReducer("groupsList"),
})