import * as actionTypes from './actionTypes';
import axios from 'axios'

export const authStart=()=>{
    return {
        type:actionTypes.AUTH_START
    }
}
export const authSuccess=(authData)=>{
    return {
        type:actionTypes.AUTH_SUCCESS,
        authData:authData
    }
}
export const authFail=(error)=>{
    return {
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}
export const auth=(email,password,method)=>{
    return dispatch => {
        dispatch(authStart());
        const authData={
            email:email,
            password:password,
            returnSecureToken:true

        }
        let url='https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC0dGJiHAsQ-hHTjJJdpoUxuHsZhBuhF0c        '
        if (!method){
            url='https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC0dGJiHAsQ-hHTjJJdpoUxuHsZhBuhF0c           '
        }
        axios.post(url,authData)
        .then(res=>{
            console.log(res);
            dispatch(authSuccess(res.data))
        })
        .catch(err=>{
            console.log(err.request);
            dispatch(authFail(err))
        })
    }
}