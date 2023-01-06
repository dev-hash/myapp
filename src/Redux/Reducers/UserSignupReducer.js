const UserSignupInitialState ={
    error:'',
    userSignupData:'',
    token:'',
};
export const UserSignupReducer = (state=UserSignupInitialState,action) =>{
    switch (action.type) {
        case USER_SIGNUP_SUCCESS:
            return {
                error:'',
                userSignupData:action.payload,
                token:action.payload.api_key
            }
        case USER_SIGNUP_ERROR:
            return{
                error:action.error,
                userSignupData:'',
                token:''
            }
    
        default:
            return state;
    }

}