import { UserLoginApi } from "../Services/Axios/ApiConfig";
import { USER_LOGIN_SUCCESS,USER_LOGIN_ERROR  } from "../Services/Types";

export const UserLoginSuccess = (res) => {
    return {
      type:USER_LOGIN_SUCCESS,
      payload: res,
    };
  };

export const UserLoginError = (error) => {
    return {
      type:USER_LOGIN_ERROR,
      error: error,
    };
  };

  export const UserLoginActionHandler = (data) => {
    return (dispatch) => {
      try {
          UserLoginApi(data).then((res)=>{
           console.log("res...data",res.data)
            const errorMessage =res && res.response && res.response.data && res.response.data.message;
            if (res) {
              const token = res && res.data && res.data.api_key;
              // const username = res && res.data && res.data.username;
              // const admin = res && res.data && res.data.admin;
      
              if (res&&res.data && res.status===200) {
                localStorage.setItem('token',token);
              
                dispatch(UserLoginSuccess(res.data));
              
                window.location.href="/dashboard"
               
              }else{
                  dispatch(UserLoginError(errorMessage));
                }
              }else{
                dispatch(UserLoginError(errorMessage));
              }
          }).catch((err)=>{
            // Swal.fire({
            //   icon: 'error',
            //   // title: 'Oops...',
            //   text: 'Something Went Wrong!!!',
            // })
            dispatch(UserLoginError('Something Went Wrong!!!'));
          }
          
          )
      } catch (err) {
      //   Swal.fire({
      //     icon: 'error',  
      //     title: 'Oops...',
      //     text: 'Something Went Wrong!!!',
      //   })
        dispatch(UserLoginError(err));
      }
  };
  };
  

