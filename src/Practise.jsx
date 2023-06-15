import React from "react";

const Practise = () => {
  //duplicates in array

  const dpIdfromExcel = [
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
    'FINR003',
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
  const data1 = dpIdfromDB.filter((currSignal) =>
    !dpIdfromExcel.some(
      (latestSignal) => currSignal === latestSignal
    )
  )

  const data = ["aaa", "bbb", "ccc", "ddd", "aaa", "bbb", "aaa", 'bbb', 'bbb'];
  // const data = ["apple", "mango", "apple", "orange", "mango", "mango"];
  const newDatata = [...new Set(data)];
  const vall = newDatata.map((vl) => [
    vl,
    data.filter((vv) => vv === vl).length,
  ]);
  console.log('repeated elements with count',vall);

  const e1 = ['2000', '2001', '2003']
  const e2 = ['2000']
  const e = e1.filter((v) => v != e2)

  const removeDuplicatesinArray = (value) => {
    let vall = value;
    let newValue = [...new Set(vall)];
    let countarr = newValue.map((val) => [val, vall.filter((v) => v === val).length]);
    return countarr.sort((a, b) => b[1] - a[1])[0]
  };
  console.log("most repeated element with count", removeDuplicatesinArray(data));

  let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

  function removeDuplicates(arr) {
    let unique = [];
    arr.forEach(element => {
      if (!unique.includes(element)) {
        unique.push(element);
      }
    });
    return unique;
  }
  console.log("arrrrrrrrrrrrrrrrrrrrrrrrrr",removeDuplicates(arr));

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
  const oobject = [{
    name: "siva",
    age: "32",
    email: "siva@yopmail.com",
    dept: "java",
    id: '1'
  },
  {
    name: "Sankar",
    age: "21",
    email: "Sankar@yopmail.com",
    dept: "react",
    id: '1'
  },
  {
    name: "Sankar",
    age: "23",
    email: "Sankar@yopmail.com",
    dept: "react",
    id: '2'
  }
  ]

  const newModifyObj = oobject.map((val) => {
    if (val.dept === 'java') {
      return { ...val, dept: "python", eligible: "true" }
    }
    return val
  })

  // console.log("newObjadd",newModifyObj);

  ///ascending ayyar o objects with number  
  const nArray = [{
    id: "3",
    name: "sssai",
    value: true
  },
  {
    id: "1",
    name: "ddd",
    value: true
  },
  {
    id: "2",
    name: "ccc",
    value: true
  }
  ]
  const ascendingArryNumeric = [...nArray].sort((a, b) => a.id - b.id);
  // console.log("ascendingArry low to high", ascendingArryNumeric);

  const decendingArryNumeric = [...nArray].sort((a, b) => b.id - a.id);
  // console.log("decendingaeeay high to low", decendingArryNumeric)

  const ascendingArrayAlpha = [...nArray].sort((a, b) => a.name > b.name ? 1 : -1);
  // console.log("ascendingArrayAlpha a-z",ascendingArrayAlpha);

  const descendingArrayAlph = [...nArray].sort((a, b) => a.name > b.name ? -1 : 1);
  // console.log("descendingArrayAlpha z-a",descendingArrayAlph)
  // 
  // The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).
  // const compare = [...nArray].sort((a,b)=>b.localeCompare(a))
  // console.log("compare",compare);


  const d1 = [
    { dpId: 'BIOS001', signal: true },
    { dpId: 'BIOP001', signal: true },
    { dpId: 'BIOP002', signal: true },
    { dpId: 'BIOP004', signal: true },
    { dpId: 'AIRS001', signal: true },
    { dpId: 'AIRT001', signal: true },
    { dpId: 'AIRP001', signal: true },
    { dpId: 'AIRR001', signal: true },
    { dpId: 'AIRR003', signal: true },
    { dpId: 'AIRR007', signal: true },
    { dpId: 'AIRR009', signal: true },
    { dpId: 'AIRR013', signal: true },
    { dpId: 'GHGS001', signal: true },
    { dpId: 'GHGT001', signal: true },
    { dpId: 'GHGP001', signal: true },
    { dpId: 'GHGP002', signal: true },
    { dpId: 'GHGP003', signal: true },
    { dpId: 'GHGP004', signal: true },
    { dpId: 'GHGP005', signal: true },
    { dpId: 'GHGP008', signal: true },
    { dpId: 'GHGP010', signal: true },
    { dpId: 'GHGR001', signal: true },
    { dpId: 'GHGR006', signal: true },
    { dpId: 'WASS001', signal: true },
    { dpId: 'WAST001', signal: true },
    { dpId: 'WASP001', signal: true },
    { dpId: 'WASP009', signal: true },
    { dpId: 'WASR001', signal: true },
    { dpId: 'WASR003', signal: true },
    { dpId: 'WAPS001', signal: true },
    { dpId: 'WAPT001', signal: true },
    { dpId: 'WAPP001', signal: true },
    { dpId: 'WAPR001', signal: true },
    { dpId: 'WAPR003', signal: true },
    { dpId: 'ENES001', signal: true },
    { dpId: 'ENET001', signal: true },
    { dpId: 'ENEP001', signal: true },
    { dpId: 'ENEP002', signal: true },
    { dpId: 'ENEP003', signal: true },
    { dpId: 'ENER001', signal: true },
    { dpId: 'ENES002', signal: true },
    { dpId: 'ENET002', signal: true },
    { dpId: 'ENEP007', signal: true },
    { dpId: 'ENER009', signal: true },
    { dpId: 'ENVS001', signal: true },
    { dpId: 'ENVP001', signal: true },
    { dpId: 'ENVP002', signal: true },
    { dpId: 'ENVP003', signal: true },
    { dpId: 'ENVP006', signal: true },
    { dpId: 'ENVP007', signal: true },
    { dpId: 'ENVP008', signal: true },
    { dpId: 'ENVP009', signal: true },
    { dpId: 'ENVR001', signal: true },
    { dpId: 'ENVR002', signal: true },
    { dpId: 'ENVR004', signal: true },
    { dpId: 'ENVR006', signal: true },
    { dpId: 'GRES001', signal: true },
    { dpId: 'GREP001', signal: true },
    { dpId: 'GREP002', signal: true },
    { dpId: 'GREP003', signal: true },
    { dpId: 'GREP004', signal: true },
    { dpId: 'GREP005', signal: true },
    { dpId: 'ESGP001', signal: true },
    { dpId: 'ESGP011', signal: true },
    { dpId: 'MATS001', signal: true },
    { dpId: 'MATP001', signal: true },
    { dpId: 'WAES001', signal: true },
    { dpId: 'WAET001', signal: true },
    { dpId: 'WAEP001', signal: true },
    { dpId: 'WAER001', signal: true },
    { dpId: 'WAER005', signal: true },
    { dpId: 'COSS001', signal: true },
    { dpId: 'COST001', signal: true },
    { dpId: 'COSP001', signal: true },
    { dpId: 'COSR003', signal: true },
    { dpId: 'PRQS001', signal: true },
    { dpId: 'PRQP001', signal: true },
    { dpId: 'PRQP004', signal: true },
    { dpId: 'PROP022', signal: true },
    { dpId: 'PRSS001', signal: true },
    { dpId: 'PRSP001', signal: true },
    { dpId: 'PRSP003', signal: true },
    { dpId: 'RESS002', signal: true },
    { dpId: 'RESS003', signal: true },
    { dpId: 'RESP001', signal: true },
    { dpId: 'RESP002', signal: true },
    { dpId: 'RESP005', signal: true },
    { dpId: 'RESR004', signal: true },
    { dpId: 'EMDS001', signal: true },
    { dpId: 'EMDS002', signal: true },
    { dpId: 'EMDP001', signal: true },
    { dpId: 'EMDR003', signal: true },
    { dpId: 'EMSS001', signal: true },
    { dpId: 'EMST001', signal: true },
    { dpId: 'EMSP001', signal: true },
    { dpId: 'EMSP002', signal: true },
    { dpId: 'EMSP003', signal: true },
    { dpId: 'EMSP004', signal: true },
    { dpId: 'EMSP006', signal: true },
    { dpId: 'EMSP007', signal: true },
  ]
  // const d2=[ 'DATS001' ]
  const d2 = ['BIOS001']

  // const finalCount = d1.map((v)=>{
  //   // v?.filter((l)=>l)
  //   if(v.dpId == d2){
  //     return (
  //       v?.dpId?.filter((v)=>v == d2)
  //     )
  //    }
  //   return v.dpId
  //  })
  // console.log('d111',d1?.length);
  // console.log('fcllll',finalCount?.length);
  // console.log('fc',finalCount);
  // const finalCount = d1.map((val) => [
  //   val,
  //   d2.filter((sm) => sm === val),
  // ]);
  // console.log('fcllll',finalCount?.length);
  // console.log('fc',finalCount);
  // const newModifyObj = oobject.map((val)=>{
  //   if(val.dept === 'java'){
  //       return {...val , dept : "python" , eligible:"true"}
  //   }
  //   return val
  // }) 
  const updatedD1 = d1.filter(item => !d2.includes(item.dpId));

  let d3 = d1.filter((o, i) =>
    // o?.dpId !== 'DATS001'
    o?.dpId !== d2[0]

  )

  //  for (const item of d1) {
  //   if (d2.includes(item.dpId)) {
  //     item.eligible = true;
  //   }
  // }
  // console.log(d1);
  //  const newModifyObjjj = d1.map((val)=>{
  //   if(val.dpId === d2[0]){
  //       return {...val , eligible:"true"}
  //   }
  //   return val
  // }) 
  // console.log('newModifyObjjj',newModifyObjjj);
  console.log('d111', d1.length);
  console.log('d3333', d3.length);

  return <div>Practise

    <div>
      Name:<input />
      Email:<input />
      Address:<input />
    </div>
    <div></div>
  </div>;
};

export default Practise;
