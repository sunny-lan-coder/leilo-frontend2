import {combineReducers} from 'redux'
import * as states from '../states'
import {createFetchListReducer} from "../list";
import {createFetchSyncReducer} from "../sync";

const loginReducer = function (state = {
    value: states.LOGGED_OUT
}, action) {
    switch (action.type) {
        case "LOGIN_PENDING":
            return {
                ...state,
                value: states.LOGGING_IN
            };
        case "LOGIN_FULFILLED":
            return {
                ...state,
                value: states.LOGGED_IN,
                lastError: undefined
            };
        case "LOGIN_REJECTED":
            return {
                ...state,
                value: states.LOGGED_OUT,
                lastError: action.payload.lastError,
            };
        case "LOGOUT_PENDING":
            return {
                ...state,
                value: states.LOGGING_OUT
            };
        case "LOGOUT_FULFILLED":
            return {
                ...state,
                value: states.LOGGED_OUT,
                lastError: undefined
            };
        case "LOGOUT_REJECTED":
            return {
                ...state,
                value: states.LOGGED_IN,
                lastError: action.payload.lastError,
            };
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