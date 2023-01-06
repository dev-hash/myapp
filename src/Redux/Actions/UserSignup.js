import { UserSignupApi } from "../Services/Axios/ApiConfig";
import { USER_SIGNUP_SUCCESS,USER_SIGNUP_ERROR,  } from "../Services/Types";

export const UserSignupSuccess = (res) => {
    return {
      type:USER_SIGNUP_SUCCESS,
      payload: res,
    };
  };

export const UserSignupError = (error) => {
    return {
      type:USER_SIGNUP_ERROR,
      error: error,
    };
  };

export const UserSignupActionHandler=(data)=>{
    return (dispatch) => {
        try {
            UserSignupApi(data).then((res)=>{
             console.log("res...data",res)
              const errorMessage =res && res.response && res.response.data && res.response.data.message;
              if (res) {
                const token = res && res.data && res.data.api_key;
                // const username = res && res.data && res.data.username;
                // const admin = res && res.data && res.data.admin;
        
                if (res&&res.data && res.status===201) {
                  localStorage.setItem('token',token);
                
                  dispatch(UserSignupSuccess(res.data));
                  console.log("hello")
                  window.location.href="/";
                 
                 
                }else{
                    dispatch(UserSignupError(errorMessage));
                  }
                }else{
                  dispatch(UserSignupError(errorMessage));
                }
            }).catch((err)=>{
              // Swal.fire({
              //   icon: 'error',
              //   // title: 'Oops...',
              //   text: 'Something Went Wrong!!!',
              // })
              dispatch(UserSignupError('Something Went Wrong!!!'));
            }
            
            )
        } catch (err) {
        //   Swal.fire({
        //     icon: 'error',  
        //     title: 'Oops...',
        //     text: 'Something Went Wrong!!!',
        //   })
          dispatch(UserSignupError(err));
        }
    };
}