import logo from './logo.svg';
import './App.css';
import List from './List';
import  NewList  from './NewList';
import Ref from './Useref';
import Userinput from './Userinput';
import Images from './Imageslider';
import CheckboxSF from './Checkbox';
import Formlogin from './LoginFormik';
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
  {/* <Formlogin/> */}
  <Formikapp/>
    </div>
  );
} 

export default App;
