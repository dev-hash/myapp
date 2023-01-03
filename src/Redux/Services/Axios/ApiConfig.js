import axios from "axios";
import { BASEURLSUPERADMIN } from "../../../config";
export const SuperAdminLoginApi=(data)=>{
    const headers = {
        "Content-Type": "application/json",
      };
      return axios
        .post(BASEURLSUPERADMIN + "login", data, )
        .then((res) => {
          return res;
        })
        .catch((err) => err);
}