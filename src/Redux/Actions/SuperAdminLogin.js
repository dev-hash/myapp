
import { SuperAdminLoginApi } from "../Services/Axios/ApiConfig"
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
export const LoginActionHandler = (data) => {
    console.log('data... ', data);
    return (dispatch) => {
        try {
            SuperAdminLoginApi(data).then((res)=>{
             console.log("res...data",res.data)
              const errorMessage =res && res.response && res.response.data && res.response.data.message;
              if (res) {
                const token = res && res.data && res.data.data.token;
                // const username = res && res.data && res.data.username;
                // const admin = res && res.data && res.data.admin;
                 console.log("token",token)
                if (res&&res.data && res.status===200) {
                  localStorage.setItem('token',token);
                
                  dispatch(LoginSuccess(res.data));
                
                  window.location.href="/dashboard"
                 
                }else{
                    dispatch(LoginError(errorMessage));
                  }
                }else{
                  dispatch(LoginError(errorMessage));
                }
            }).catch((err)=>{
              // Swal.fire({
              //   icon: 'error',
              //   // title: 'Oops...',
              //   text: 'Something Went Wrong!!!',
              // })
              dispatch(LoginError('Something Went Wrong!!!'));
            }
            
            )
        } catch (err) {
        //   Swal.fire({
        //     icon: 'error',  
        //     title: 'Oops...',
        //     text: 'Something Went Wrong!!!',
        //   })
          dispatch(LoginError(err));
        }
    };
  };