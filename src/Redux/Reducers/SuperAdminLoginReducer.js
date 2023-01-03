import { LOGIN_ERROR, LOGIN_SUCCESS } from "../Services/Types";

const initialState ={
    error:'',
    loginData:'',
    token:'',
};
export const AdminLoginReducer = (state=initialState,action) =>{
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                error:'',
                loginData:action.payload,
                token:action.payload.api_key
            }
        case LOGIN_ERROR:
            return{
                error:action.error,
                loginData:'',
                token:''
            }
    
        default:
            return state;
    }

}