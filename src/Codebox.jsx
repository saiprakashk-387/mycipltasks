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

  const getEsgRating = (totalEsgScore) => {
    let A = "Low Risk";
    let AA = "Very low";
    let AAA = "Extremely low Risk";
    let B = "Very High Risk";
    let BB = "High Risk";
    let BBB = "Moderate Risk";
    let C = "Extremely High Risk";
  console.log("toafsg",totalEsgScore);

    switch (true) {  ///switch case
      case (totalEsgScore <= 120):
        return C;
      case totalEsgScore >= 121 && totalEsgScore <= 270:
        return B;
      case totalEsgScore >= 271 && totalEsgScore <= 420:
        return BB;
      case totalEsgScore >= 421 && totalEsgScore <= 570:
        return BBB;
      case totalEsgScore >= 571 && totalEsgScore <= 720:
        return A;
      case totalEsgScore >= 721 && totalEsgScore <= 870:
        return AA;
      default:
        console.log('SEWITDVFDG',totalEsgScore);
        return AAA;
    }
    // try {  ///if loop
    //   if (totalEsgScore < 120) return C;
    //   else if (totalEsgScore >= 121 && totalEsgScore <= 270) return B;
    //   else if (totalEsgScore >= 271 && totalEsgScore <= 420) return BB;
    //   else if (totalEsgScore >= 421 && totalEsgScore <= 570) return BBB;
    //   else if (totalEsgScore >= 571 && totalEsgScore <= 720) return A;
    //   else if (totalEsgScore >= 721 && totalEsgScore <= 870) return AA;
    //   else return AAA;
    // } catch (err) {
    //   throw err;
    // }
  };
  console.log("esg rating ===",getEsgRating(710));
  var data = cities
    ?.map((val, i) => {
      if (val?.country === countryID) return val?.cities;
    })
    .filter((sh) => sh !== undefined);

  ///removing age from object
  let vall = {
    age: "32",
    name: "sss",
    email: "sss@gmail.com",
  };
  //method 1
  //   delete vall['age'];
  delete vall.age;
  //  console.log(vall);
  //metyhod 2
  const { age, ...employeeRest } = vall;
  // console.log("employeeRest", employeeRest);


  ///removing age from array of object
  const tValue = [
    {
      age: "32",
      name: "sss",
      email: "sss@gmail.com",
    },
    {
      age: "24",
      name: "ghjgfkjg",
      email: "dghfhh@gmail.com",
    },
  ];
  //metohod 1
  const result = tValue.map(({ age, ...rest }) => ({ ...rest }));
  // console.log("filterObject", result);

  return (
    <div className="App">
      {/* {getEsgRating(180)} */}
      <hr />
      <select
        onChange={(e) => {
          getCountryId(e);
        }}
      >
        <option> select Country</option>
        {cities?.map((val, i) => {
          return (
            <option key={i} value={val?.country}>
              {val?.country}
            </option>
          );
        })}
      </select>{" "}
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
