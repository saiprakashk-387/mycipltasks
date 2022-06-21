import React from "react";

const TreeView = () => {
  const data = [
    { path: "/var/a.txt", content: "aa" },
    { path: "/var/b/c.txt", content: "cc" },
    { path: "/var/d/e/f/g.txt", content: "gg" },
    { path: "/var/h/", content: "" },
    { path: "/var/h.h/", content: "" },
    { path: "/var///i//", content: "" },
    { path: "/var/b/a.txt", content: "aa" },
    { path: "/var/b/b.txt", content: "bb" },
  ];

  return<>
  {data && 
  <div>{data?.map((item,i)=>{
   let absolute = item.path.split(1,1);
let val =absolute.toString().replaceAll(/\//g,"")
   console.log("val",val);   
   
      return(
          <li>{item.path},{item.content}</li>
      )
  })}</div>
  }
   
  </>
};

export default TreeView;
