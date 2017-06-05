import {postPromise, syncActionTemplate, FETCH} from './syncAction'

export function login(params) {
    return function (dispatch) {
        dispatch({type: "LOGIN_PENDING"});
        postPromise("login", params).then(() => {
            dispatch({type: "LOGIN_FULFILLED"})
        }).catch((err) => {
            dispatch({type: "LOGIN_REJECTED", payload: {lastError: err}})
        })
    }
}

export function logout() {
    return function (dispatch) {
        dispatch({type: "LOGOUT_PENDING"});
        postPromise("killSession").then(() => {
            dispatch({type: "LOGOUT_FULFILLED"})
        }).catch((err) => {
            dispatch({type: "LOGOUT_REJECTED", payload: {lastError: err}})
        })
    }
}

export const fetchGroupsList = syncActionTemplate("groupsList", "listGroups");

export const fetchGroupPerms = syncActionTemplate("userGroupPerms", "getGroupPermissions", FETCH, (payload, params) => {
    return {value: payload, uuid: params.group_id}
});

//todo this doesn't even need to be part of state (i think)
// export function pushGroupPerms(groupid, perms) {
//     const objName = "userGroupPerms";
//     return function (dispatch) {
//         dispatch(action(PUSH, objName, PENDING, {uuid: groupid}));
//         postPromise({group_id: groupid}).then((result) => {
//             dispatch(action(PUSH, objName, FULFILLED, {uuid: groupid, value: result}))
//         }).catch((err) => {
//             dispatch(action(PUSH, objName, REJECTED, {uuid: groupid, lastError: err}))
//         })
//     }
// }