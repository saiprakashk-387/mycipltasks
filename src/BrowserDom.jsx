import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const BrowserDom = () => {
  const [first, setfirst] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setfirst(true);
    }, 6000);
    getinterval();
    getLocation();
  }, []);
  const getinterval = () => {
    setInterval(() => {
      let d = new Date();
      return d.toLocaleTimeString();
    }, 1000);
  };
  const greetingsText = useMemo(() => {
    const hourNow = new Date().getHours();
    return hourNow < 12
      ? "Good Morning"
      : hourNow < 17
      ? "Good Afternoon"
      : "Good Evening";
  }, []);
  console.log("first", first);
  console.log("firsgreetingsTextt", greetingsText);
  let href = window.location.href;
  let hostname = window.location.hostname;
  let port = window.location.port;

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      window.alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    console.log(
      "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude
    );
    window.alert(
      "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude
    );
  }
  const sendOTP = () => {
    console.log("jkhfhdgh");
  };
  //   const startCountdown = (seconds) => {
  //     let counter = seconds;

  //     const interval = setInterval(() => {
  //     //   console.log(counter);
  //       counter--;
  //       if (counter < 0) {
  //         clearInterval(interval);
  //         console.log("Ding!");
  //       }
  //       //   return counter;
  //     }, 1000);
  //     return counter;
  //   };
  //   console.log(startCountdown(5));
  return (
    <>
      <div>
        {greetingsText} BrowserDom {href + hostname + port}
        {first ? <button>Welcome</button> : <button disabled>welcome</button>}
      </div>
      <>
        <h1 className="text-2xl text-secondary font-semibold">Get Started</h1>
        <h4 className="mt-3 text-darkgray font-light">
          Login or sign up by simply verifying your phone number{" "}
          {/* {startCountdown("5")} */}
        </h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendOTP();
          }}
        >
          <input
            id="phone"
            name="phone"
            className="block w-full mt-6 px-4 py-2 rounded-lg outline-none focus:border-secondary border text-sm text-primary placeholder:text-lightgray"
            placeholder="Enter Phone Number"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            maxLength={10}
            onChange={(e) => e.target.value.length <= 10 && e.target.value}
          />
          <button
            className="w-full flex items-center justify-center space-x-2 mt-6 px-4 py-2 rounded-full bg-secondary disabled:bg-darkgray text-white"
            type="submit"
          >
            <span className="text-sm font-medium">Send OTP</span>
          </button>
        </form>
      </>
    </>
  );
};

export default BrowserDom;
