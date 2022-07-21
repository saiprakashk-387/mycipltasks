import { useEffect, useState } from "react";
import axios from "axios";

export default function Codebox() {
  const [cities, setcities] = useState([]);
  const [countryID, setcountryID] = useState("");
  useEffect(() => {
    const dar = axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((res) => {
        setcities(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const getCountryId = (e) => {
    setcountryID(e.target.value);
  };

  var data = cities
    ?.map((val, i) => {
      if (val?.country === countryID) return val?.cities;
    })
    .filter((sh) => sh !== undefined);
  return (
    <div className="App"> 
      <select
        onChange={(e) => {
          getCountryId(e);
        }}
      >
        <option> select Country</option>
        {cities?.map((val, i) => {
          return <option key={i} value={val?.country}>{val?.country}</option>;
        })}
      </select>{" "}
       
        {/* {cities?.map((val, i) => {
            countryID == val.country &&  val.cities.map(v=>{
              console.log("vvvvvvvvvvvvvvvvvv",v);
              return (
                <h1 key ={v+"1"} value={v}>{v+"uuu"}</h1>
              )
            })
        })} */}
    
      <br />
      {data && (
        <select>
          <option> select Cities</option>
          {data[0]?.map((val, i) => {
            return <option key={i}>{val}</option>;
          })}
        </select>
      )}
    </div>
  );
}
