import { LOGIN_ERROR, LOGIN_SUCCESS } from "../Services/Types"


export const LoginSuccess = (res)=>{
    return {
        type:LOGIN_SUCCESS,
        payload:res
    }
}
export const LoginError = (error)=>{
return {
    type:LOGIN_ERROR,
    error:error
}
}