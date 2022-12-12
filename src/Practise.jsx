import React from "react";

const Practise = () => {
  //duplicates in array
  const data = ["aaa", "bbb", "ccc", "ddd", "aaa", "bbb"];
  const newDatata = [...new Set(data)];
  const vall = newDatata.map((vl) => [
    vl,
    data.filter((vv) => vv === vl).length,
  ]);

  // console.log("data", vall);

  //   const removeDuplicatesinArray = (value) => {
  //     let vall = value;
  //     let newValue = [...new Set(vall)];
  //     return newValue.map((val) => [val, vall.filter((v) => v === val).length]);
  //   };
  //   console.log(
  //     "datdfdgfa",
  //     removeDuplicatesinArray(["aaa", "bbb", "ccc", "ddd", "aaa", "bbb"])
  //   );

  //duplicates words  in string
  const datastring = "they have a new user and new admin";
  const newstring = datastring.split(" ");
  const filterdup = [...new Set(newstring)];
  const finaloutput = filterdup.map((val) => [
    val,
    newstring.filter((sm) => sm === val).length,
  ]);
  // console.log("newstring", finaloutput);

  ///duplicates letters in word
  const dword = "ssmbdvv";
  const newword = dword.split("");
  const filtword = [...new Set(newword)];
  const wordltrscount = filtword.map((vv) => [
    vv,
    newword.filter((vs) => vs === vv).length,
  ]);
  // console.log("wordltrscount", wordltrscount);

  //remove property in single object
  const newobj = {
    name: "siva",
    age: "32",
    email: "siva@yopmail.com",
    dept: "java",
  };
  const { age, dept, ...newVal } = newobj;
  // console.log("newobj", newVal);

  //  //remove  property in array of object
  const arrobj = [
    {
      name: "siva",
      age: "32",
      email: "siva@yopmail.com",
      dept: "java",
    },
    {
      name: "Sankar",
      age: "21",
      email: "Sankar@yopmail.com",
      dept: "react",
    },
  ];

  const newarrobj = arrobj.map(({ age, dept, ...newVal }) => ({ ...newVal }));
  // console.log("newVal", newarrobj);

///update property value in object 
const oobject =[ {
    name: "siva",
    age: "32",
    email: "siva@yopmail.com",
    dept: "java",
  },
  {
    name: "Sankar",
    age: "21",
    email: "Sankar@yopmail.com",
    dept: "react",
  },]

  const newModifyObj = oobject.map((val)=>{
    if(val.dept === 'java'){
        return {...val , dept : "python" , eligible:"true"}
    }
    return val
  }) 

// console.log("newObjadd",newModifyObj);

///ascending ayyar o objects with number  
const nArray = [{
  id:"3",
  name:"sssai",
  value:true
},
{
  id:"1",
  name:"ddd",
  value:true
},
{
  id:"2",
  name:"ccc",
  value:true
}
]
const ascendingArryNumeric =[...nArray].sort((a,b)=>a.id-b.id);
// console.log("ascendingArry",ascendingArryNumeric);

const decendingArryNumeric=[...nArray].sort((a,b)=>b.id-a.id);
// console.log("decendingaeeay",decendingArryNumeric)

const ascendingArrayAlpha=[...nArray].sort((a,b)=>a.name>b.name?1:-1);
// console.log("ascendingArrayAlpha",ascendingArrayAlpha);

const descendingArrayAlph=[...nArray].sort((a,b)=>a.name>b.name?-1:1);
// console.log("descendingArrayAlpha",descendingArrayAlph)
// 
// The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).
// const compare = [...nArray].sort((a,b)=>b.localeCompare(a))
// console.log("compare",compare);
  return <div>Practise

    <div>
      Name:<input/>
      Email:<input/>
      Address:<input/>
    </div>
    <div></div>
  </div>;
};

export default Practise;
