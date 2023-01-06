import { USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../Services/Types";

const UserLoginInitialState ={
    error:'',
    userLoginData:'',
    token:'',
};
export const UserLoginReducer = (state=UserLoginInitialState,action) =>{
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                error:'',
                userLoginData:action.payload,
                token:action.payload.api_key
            }
        case USER_LOGIN_ERROR:
            return{
                error:action.error,
                userLoginData:'',
                token:''
            }
    
        default:
            return state;
    }

}