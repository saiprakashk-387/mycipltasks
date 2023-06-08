import axios from "axios";

export const GetData = async ( method,url, dispatch, data) => {
    let logindata = await axios({
      method: method,
    //   url: `http://localhost:5050/auth/${url}`,
      url: url,
      data: data,
    });
    return logindata
//    console.log("logindata.data",logindata.data);
    // dispatch(login(logindata.data));
    //  dispatch(authenticate(logindata.data));
  }