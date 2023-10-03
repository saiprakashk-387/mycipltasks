// import { hover } from "@testing-library/user-event/dist/hover";
// import React, { useState, useEffect } from "react";

// function Stopwatch() {
//   const [seconds, setSeconds] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timer;

//     if (isRunning) {
//       timer = setInterval(() => {
//         // Update seconds, minutes, and hours as needed
//         if (seconds < 59) {
//           setSeconds(seconds + 1);
//         } else if (minutes < 59) {
//           setSeconds(0);
//           setMinutes(minutes + 1);
//         } else {
//           setSeconds(0);
//           setMinutes(0);
//           setHours(hours + 1);
//         }
//       }, 1000);
//     } else {
//       clearInterval(timer);
//     }

//     return () => clearInterval(timer);
//   }, [isRunning, seconds, minutes, hours]);

//   const toggleTimer = () => {
//     setIsRunning(!isRunning);
//   };

//   const resetTimer = () => {
//     setIsRunning(false);
//     setSeconds(0);
//     setMinutes(0);
//     setHours(0);
//   };

//   return (
//     <div>
//       <div>
//         {isRunning ? (
//           <button>
//             {" "}
//             <span>Clocked In</span> {""}
//             <span>{hours.toString().padStart(2, "0")}:</span>
//             <span>{minutes.toString().padStart(2, "0")}:</span>
//             <span>{seconds.toString().padStart(2, "0")}</span>
//           </button>
//         ) : (
//           <button onClick={toggleTimer}>Web Clock-in</button>
//         )}
//       </div>
//       <button onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</button>
//       <button onClick={resetTimer}>Reset</button>
//     </div>
//   );
// }

// export default Stopwatch;

// import React, { useState, useEffect } from "react";

// function Stopwatch() {
//   const [seconds, setSeconds] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     let interval;

//     if (isActive) {
//       interval = setInterval(() => {
//         setSeconds((prevSeconds) => prevSeconds + 1);
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [isActive]);

//   const startTimer = () => {
//     setIsActive(true);
//   };

//   const stopTimer = () => {
//     setIsActive(false);
//   };

//   const resetTimer = () => {
//     setIsActive(false);
//     setSeconds(0);
//   };

//   const continueTimerFrom = (newTime) => {
//     setIsActive(false);
//     setSeconds(newTime);
//     setIsActive(true);
//   };

//   return (
//     <div>
//       <div>{seconds} seconds</div>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//       <button onClick={resetTimer}>Reset</button>
//       <button onClick={() => continueTimerFrom(10)}>
//         Continue from 10 seconds
//       </button>
//     </div>
//   );
// }

// export default Stopwatch;

import moment from "moment";
import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isActive, setIsActive] = useState(false);
  const [totalSec, setTotalSec] = useState();

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = { ...prevTime };
          newTime.seconds++;

          if (newTime.seconds === 60) {
            newTime.seconds = 0;
            newTime.minutes++;

            if (newTime.minutes === 60) {
              newTime.minutes = 0;
              newTime.hours++;
            }
          }

          return newTime;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };
  console.log("date", moment("08/31/2023").format("DD/MM/YYYY"));
  const continueTimerFrom = (newTime) => {
    setIsActive(false);
    setTime({
      hours: newTime?.split?.(":")[0],
      minutes: newTime?.split?.(":")[1],
      seconds: newTime?.split?.(":")[2],
    });
    setIsActive(true);
  };

  const getloginDuration = () => {
    let val = "09/27/2023,10:16:06 AM";
    let val1 = moment().format("L,LTS", "HH:mm:ss a");
    let inTime = moment(val?.split(",")[1], "HH:mm:ss a");
    let outTime = moment(val1?.split(",")[1], "HH:mm:ss a");
    var hrs = moment.utc(outTime.diff(inTime)).format("HH");
    var min = moment.utc(outTime.diff(inTime)).format("mm");
    var sec = moment.utc(outTime.diff(inTime)).format("ss");
    let time = [hrs, min, sec].join(":");
    return time;
  };
  // console.log("diffmyyask", getloginDuration());
  return (
    <div>
      <div>
        {String(time.hours).padStart(2, "0")}:
        {String(time.minutes).padStart(2, "0")}:
        {String(time.seconds).padStart(2, "0")}
      </div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={() => continueTimerFrom(getloginDuration())}>
        Continue from previous loggin
      </button>
    </div>
  );
}

export default Stopwatch;
///comment for continuation when refresh  from mern client-timer.jsx///
// const Stopwatch = (props) => {
//   const dispatch = useDispatch();
//   const { userAppLoginn } = props;
//   const [clockIn, setClockIn] = useState();
//   const [logId, setLoginId] = useState();
//   const [seconds, setSeconds] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);
//   const [userLogTime, setUserlogTime] = useState();
//   useEffect(() => {
//     setLoginId(sessionStorage.getItem("logid"));
//     setClockIn(sessionStorage.getItem("loginStatus"));
//     setUserlogTime(sessionStorage.getItem("login_at"));
//   }, [userAppLoginn]);
//   let timeNow = moment().format("L,LTS", "HH:mm:ss a");
//   useEffect(() => {
//     let timer;
//     if (isRunning) {
//       timer = setInterval(() => {
//         // Update seconds, minutes, and hours as needed
//         if (seconds < 59) {
//           setSeconds(seconds + 1);
//         } else if (minutes < 59) {
//           setSeconds(0);
//           setMinutes(minutes + 1);
//         } else {
//           setSeconds(0);
//           setMinutes(0);
//           setHours(hours + 1);
//         }
//       }, 1000);
//     } else {
//       clearInterval(timer);
//     }

//     return () => clearInterval(timer);
//   }, [isRunning, seconds, minutes, hours]);

//   const getloginDuration = (val, val1) => {
//     let inTime = moment(val?.split(",")[1], "HH:mm:ss a");
//     let outTime = moment(val1?.split(",")[1], "HH:mm:ss a");
//     var hrs = moment.utc(outTime.diff(inTime)).format("HH");
//     var min = moment.utc(outTime.diff(inTime)).format("mm");
//     var sec = moment.utc(outTime.diff(inTime)).format("ss");
//     return [hrs, min, sec].join(":");
//   };

//   const resetTimer = () => {
//     setIsRunning(false);
//     setSeconds(0);
//     setMinutes(0);
//     setHours(0);
//   };
//   const clockInprop = () => {
//     setIsRunning(!isRunning);
//     let data = {
//       inTime: moment().format("L,LTS", "HH:mm:ss a"),
//       outTime: "",
//     };
//     dispatch(userApplogin(data));
//     // localStorage.setItem("logged_inn", moment().format("L,LTS", "HH:mm:ss a"))
//   };

//   const clockOutprop = () => {
//     let id = logId;
//     let data = {
//       outTime: moment().format("L,LTS", "HH:mm:ss a"),
//     };
//     dispatch(userApplogout(data, id));
//     resetTimer();
//     localStorage.clear();
//   };

//   const handleMouseOver = () => {
//     setIsHovering(true);
//   };

//   const handleMouseOut = () => {
//     setIsHovering(false);
//   };
//   console.log(
//     "timeinn",
//     `${hours.toString().padStart(2, "0")}:${minutes
//       .toString()
//       .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
//   );
//   console.log("diff", getloginDuration(userLogTime, timeNow));

//   return (
//     <div>
//       {clockIn === "Active" ? (
//         <Button
//           onClick={clockOutprop}
//           sx={{ color: "aliceblue" }}
//           onMouseOver={handleMouseOver}
//           onMouseOut={handleMouseOut}
//         >
//           {isHovering ? (
//             <p style={{ backgroundColor: "#a0cfa3", width: "170px" }}>
//               {"WEB CLOCK-OUT"}
//             </p>
//           ) : (
//             <p style={{ width: "170px" }}>{`CLOCKED IN\n ${hours
//               .toString()
//               .padStart(2, "0")}:${minutes
//               .toString()
//               .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} `}</p>
//           )}
//         </Button>
//       ) : (
//         <Button
//           onClick={clockInprop}
//           sx={{
//             color: "aliceblue",
//             backgroundColor: "#bf6142",
//             margin: "auto",
//           }}
//         >
//           WEB CLOCK-IN
//         </Button>
//       )}
//     </div>
//   );
// };

// export default Stopwatch;
