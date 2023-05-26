import React from "react";

const Practise = () => {
  //duplicates in array

  const dpIdfromExcel=[  
    'COSS001',
    'COST001',
    'COSP001',
    'DATS001',
    'DATS002',
    'DATP001',
    'DATP002',
    'DATP003',
    'DATP004',
    'PRQS001',
    'PRQP001',
    'PRQP004',
    'PROP022',
    'PRSP001',
    'RESS002',
    'RESS003',
    'EMDS001',
    'EMDS002',
    'EMDP001',
    'EMSS001',
    'EMST001',
    'EMSP001',
    'EMSP002',
    'EMSP003',
    'EMSR014',
    'HUMS001',
    'HUMP005',
    'HUMP009',
    'AUDC001',
    'AUDC002',
    'AUDC003',
    'AUDC004',
    'AUDC005',
    'AUDC006',
    'BOCP001',
    'BODC001',
    'BOIS001',
    'BOIC001',
    'BOIP002',
    'BOIP003',
    'BOSS002',
    'BOSC001',
    'BOSC002',
    'BOSC003',
    'BOSC004',
    'BOSC007',
    'BOSP001',
    'COMC001',
    'COMC002',
    'COMC003',
    'COMC004',
    'COMC005',
    'COMC006',
    'COMC007',
    'COMC008',
    'BUSS001',
    'BUSS002',
    'BUSS003',
    'BUSS004',
    'BUSC001',
    'BUSC002',
    'BUSC003',
    'BUSP001',
    'BUSP002',
    'BUSP003',
    'BUSP006',
    'BUSP008',
    'BUSP009',
    'BUSP010',
    'FINC001',
    'FINP001',
    'FINP002',
    'MACS001',
    'MACP003',
    'MACP005',
    'MACP010',
    'MASP001',
    'SHAS001',
    'SHAS002',
    'SHAC004',
    'SHAC005',
    'SHAC007',
    'SHAC008',
    'SHAC009',
    'SHAC010',
    'SHAC011',
    'SHAC012',
    'SHAP001',
    'SHAP004',
    'SHAP006', 
    'SHAP007',
    'BIOS001',
    'BIOP001',
    'BIOP002',
    'BIOP004',
    'AIRS001',
    'AIRP001',
    'GHGS001',
    'GHGT001',
    'GHGP001',
    'GHGP002',
    'GHGP003',
    'GHGP005',
    'GHGP010',
    'WASS001',
    'WASP001',
    'WAPS001',
    'ENES001',
    'ENEP001',
    'ENEP002',
    'ENEP007',
    'ENER009',
    'ENVS001',
    'ENVP001',
    'ENVP002',
    'ENVP003',
    'ENVP006',
    'ENVP007',
    'ENVP008',
    'ENVP009',
    'GREP001',
    'GREP002',
    'GREP003',
    'ESGP001',
    'ESGP011',
    'MATP001',
    'WAES001',
    'WAEP001',
    'WAER005',
    'ANTR001',
    'AIRR001',
    'AIRR003',
    'AIRR007',
    'AIRR009',
    'GHGR001',
    'WAPR001',
    'ENER001',
    'WAER001',
    'COSR003',
    'BOCR012',
    'BOIR015',
    'BOIR016',
    'BOSR006',
    'MACR011',
    'MACR012',
    'MACR022',
    'MASR006',
    'AUDR003',
    'BODR002',
    'BOIR002',
    'BOIR004',
    'BOIR006',
    'BOIR008',
    'BOIR012',
    'BOIR014',
    'BOSR003',
    'BOSR005',
    'BOSR008',
    'COMR003',
    'COMR006',
    'MASR002',
    'MASR005',
    'FINR003' , 
  ]
  const dpIdfromDB = [
    'COSS001',
    'COST001',
    'COSP001',
    'DATS001',
    'DATS002',
    'DATP001',
    'DATP002',
    'DATP003',
    'DATP004',
    'PRQS001',
    'PRQP001',
    'PRQP004',
    'PROP022',
    'PRSP001',
    'RESS002',
    'RESS003',
    'EMDS001',
    'EMDS002',
    'EMDP001',
    'EMSS001',
    'EMST001',
    'EMSP001',
    'EMSP002',
    'EMSP003',
    'EMSR001',
    'EMSR005',
    'EMSR014',
    'HUMS001',
    'HUMP005',
    'HUMP009',
    'BIOS001',
    'BIOP001',
    'BIOP002',
    'BIOP004',
    'AIRS001',
    'AIRP001',
    'GHGS001',
    'GHGT001',
    'GHGP001',
    'GHGP002',
    'GHGP003',
    'GHGP005',
    'GHGP010',
    'WASS001',
    'WASP001',
    'WAPS001',
    'ENES001',
    'ENEP001',
    'ENEP002',
    'ENEP007',
    'ENVS001',
    'ENVP001',
    'ENVP002',
    'ENVP003',
    'ENVP006',
    'ENVP007',
    'ENVP008',
    'ENVP009',
    'GREP001',
    'GREP002',
    'GREP003',
    'ESGP001',
    'ESGP011',
    'MATP001',
    'WAES001',
    'WAEP001',
    'WAER005',
    'AUDC001',
    'AUDC002',
    'AUDC003',
    'AUDC004',
    'AUDC005',
    'AUDC006',
    'BOCP001',
    'BODC001',
    'BOIS001',
    'BOIC001',
    'BOIP002',
    'BOIP003',
    'BOSS002',
    'BOSC001',
    'BOSC002',
    'BOSC003',
    'BOSC004',
    'BOSC007',
    'BOSP001',
    'COMC001',
    'COMC002',
    'COMC003',
    'COMC004',
    'COMC005',
    'COMC006',
    'COMC007',
    'COMC008',
    'BUSS001',
    'BUSS002',
    'BUSS003',
    'BUSS004',
    'BUSC001',
    'BUSC002',
    'BUSC003',
    'BUSP001',
    'BUSP002',
    'BUSP003',
    'BUSP006',
    'BUSP008',
    'BUSP009',
    'BUSP010',
    'FINC001',
    'FINP001',
    'FINP002',
    'MACS001',
    'MACP003',
    'MACP005',
    'MACP010',
    'MASP001',
    'SHAS001',
    'SHAS002',
    'SHAC004',
    'SHAC005',
    'SHAC007',
    'SHAC008',
    'SHAC009',
    'SHAC010',
    'SHAC011',
    'SHAC012',
    'SHAP001',
    'SHAP004',
    'SHAP006',
    'SHAP007',
    'ANTR001',
    'AIRR001',
    'AIRR003',
    'AIRR009',
    'GHGR001',
    'WAPR001',
    'WAER001',
    'COSR003',
    'BOCR012',
    'BOIR015',
    'BOIR016',
    'BOSR006',
    'MACR011',
    'MACR012',
    'MACR022',
    'MASR006',
    'AUDR003',
    'BODR002',
    'BOIR002',
    'BOIR004',
    'BOIR006',
    'BOIR008',
    'BOIR012',
    'BOSR003',
    'BOSR005',
    'BOSR008',
    'COMR003',
    'COMR006',
    'MASR002',
    'MASR005',
    'FINR003',
    ]
    const data1 =dpIdfromDB.filter((currSignal) =>
    !  dpIdfromExcel.some(
       (latestSignal) => currSignal === latestSignal
     )
   )

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
    id:'1'
  },
  {
    name: "Sankar",
    age: "21",
    email: "Sankar@yopmail.com",
    dept: "react",
    id:'1'
  },
  {
    name: "Sankar",
    age: "23",
    email: "Sankar@yopmail.com",
    dept: "react",
    id:'2'
  }
]

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
