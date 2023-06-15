import axios from "axios";

export const GetData = async ( method,url, dispatch, data) => {
  try{
    let logindata = await axios({
      method: method,
      url: `https://countriesnow.space/api/v0.1/${url}`,
      // url: url,
      data: data,
    });
    return logindata
  }catch(error){
    throw error
  }
    // let logindata = await axios({
    //   method: method,
    //   url: `https://countriesnow.space/api/v0.1/${url}`,
    //   // url: url,
    //   data: data,
    // });
    // return logindata
//    console.log("logindata.data",logindata.data);
    // dispatch(login(logindata.data));
    //  dispatch(authenticate(logindata.data));
  }