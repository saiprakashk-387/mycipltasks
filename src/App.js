import logo from './logo.svg';
import './App.css';
import List from './List';
import  NewList  from './NewList';
import Ref from './Useref';
import Userinput from './Userinput';
import Images from './Imageslider';
import CheckboxSF from './Checkbox';

import Formikapp from './Formikvalidate';


function App() {
  return (
    <div className="App">    
     {/* <List/> */}
     {/* <NewList/> */}
     <hr/>
     {/* <Userinput/> */}
     {/* <Ref/> */}
     <hr/>
     <Images/>
     <hr/>
     <CheckboxSF/>
     <hr/>
 
  <Formikapp/>
    </div>
  );
} 

export default App;
