import React from 'react'

const Studentmarks = () => {
  
  const students = [
    {
      Name: "John",
      Tamil: "30",
      English: "40",
      Maths: "33",
      Science: "60",
      Social: "80"
    },
    {
      Name: "Doe",
      Tamil: "90",
      English: "40",
      Maths: "66",
      Science: "80",
      Social: "70"
    },
    {
      Name: "James",
      Tamil: "55",
      English: "67",
      Maths: "76",
      Science: "86",
      Social: "91"
    },
    {
      Name: "Phil",
      Tamil: "66",
      English: "59",
      Maths: "91",
      Science: "45",
      Social: "65"
    },
    {
      Name: "David",
      Tamil: "87",
      English: "50",
      Maths: "87",
      Science: "79",
      Social: "94"
    }
  ];
  
  const totalMarks = students.map((student) => {
    const { Name, Tamil, English, Maths, Science, Social } = student;
    const total = parseInt(Tamil) + parseInt(English) + parseInt(Maths) + parseInt(Science) + parseInt(Social);
    if ((student.Tamil <= 35) ||  (student.English <= 35) || (student.Maths <= 35) || (student.Science <= 35) || (student.Social <= 35)) {
       return { Name, TotalMarks: total ,"status":"Fail"} 
    }else{
      return { Name, TotalMarks: total ,"status":"pass"} 
    }
  });
  
  console.log({"studentData":students,"studentresult":totalMarks});
  
  return (
    <div>Studentmarks : {totalMarks}</div>
  )
}

export default Studentmarks


  
