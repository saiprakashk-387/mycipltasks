import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const Cookieapp = () => {
   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');
   const [cookies, setCookie ,removeCookie] = useCookies(['user']);

   const handle = () => {
      setCookie('Name', name);
      setCookie('Password', pwd);
    //   localStorage.setItem("name", name)
    //   localStorage.setItem("pasword", pwd)
   };
   const handleRemove= ()=>{
   
       localStorage.removeItem('name')
   }
   console.log(cookies);
   return (
      <div className="App">
      <h1>Name of the user:</h1>
      <input
         placeholder="Name"
         value={name}
         onChange={(e) => setName(e.target.value)}
      />
      <h1>Password of the user:</h1>
      <input
         type="password"
         placeholder="Password"
         value={pwd}
         onChange={(e) => setPwd(e.target.value)}
      />
      <div>
      <button type='button' onClick={handle}>Set Cookie</button>{' '}
      <button onClick={handleRemove}>Remove Cookie</button>{' '}
      </div>
      <br />
      {cookies.Name && (
      <div>
         Name: <p>{cookies.Name}</p>
      </div>
      )}
      {cookies.Password && (
      <div>
         Password: <p>{cookies.Password}</p>
      </div>
      )}
      </div>
   );
};
export default Cookieapp;