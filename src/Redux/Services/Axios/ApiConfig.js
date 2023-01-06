
import axios from "axios";
import { BASEURL, BASEURLSUPERADMIN } from "../../../config";
export const SuperAdminLoginApi = async (data) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const res = await axios.post(BASEURLSUPERADMIN + "login", data, { headers: headers });
    return res;
  } catch (err) {
    return err;
  }
};

export const UserLoginApi = async(data) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const res = await axios.post(BASEURL+ "login", data, { headers: headers });
    return res;
  } catch (err) {
    return err;
  }
};


export const UserSignupApi=async(data)=>{
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const res=await axios.post(BASEURL+ "signUp" ,data,{headers:headers});
    return res;
  } catch (error) {
    return error;
  }
}