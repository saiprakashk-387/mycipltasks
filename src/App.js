import logo from './logo.svg';
import './App.css';
import List from './List';
import NewList from './NewList';
import Ref from './Useref';
import Userinput from './Userinput';
import Images from './Imageslider';
import CheckboxSF from './Checkbox';

import Formikapp from './Formikvalidate';
import Formlogin from './LoginFormik';
import { Googleauth } from './Googleauth';
import Cookieapp from './Cookie';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useCookies } from "react-cookie";
import Graph from './Graph';
import { Graph1 } from './Graph1';
import Example from './Crudnew/File'
import TreeView from './TreeView';
import Table from './Table';
import Occurence from './Occurence';
import Codebox from './Codebox';
import ZoomImage from './ZoomImage';
import PdfViewer from './PdfViewer';
import ReactTree from './ReactTree';
import Newfolderuplod from './Newfolderuplod'
import Folderupload from './Folderupload'
import StringMethod from './StringMethod';
import Todos from './Todos';
import ImageConversion from './ImageConversion';
import TodoList from './TodoListCrud';
import TodoListCrud from './TodoListCrud';
import Print from './Print';
import DownloadPrint from './PrintComponents/DownloadPrint';
import Chart  from './Barchart';
import MultiImage from './MultiImage';
import Printexcel from './Printexcel';
import Login from './Login';
import Chartjs from './Chartjs';
import Practise from './Practise';
import Conversion from './conversion';

function App() {
  const [cookies, setCookie] = useCookies();
 
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    // uri: 'https://integration.weavit.ai/graphql',https://api.spacex.land/graphql
    cache: new InMemoryCache()
  });
  
  return (
    <div className="App">
       {/* <Chart/>    */}
          {/* <ApolloProvider client={client}> */}
        {/* <Graph /> */}
        {/* <Graph1/> */}       
      {/* </ApolloProvider> */}
      {/* <h2>
        {cookies.user && <p>{cookies.user}</p>}  </h2> */}
      {/* <List/> */}
      {/* <hr/> */}
      {/* <ReactTree/> */}
      {/* <TreeView/> */}
      {/* <Table/> */}
      {/* <Example/> */}
      {/* <NewList/> */}
      {/* <hr /> */}
      {/* <Userinput/> */}
      {/* <Ref/> <hr/> */}
      {/* <hr /> */}
       {/* <Images />
       <br/> */}
              {/* <Googleauth /> */}
              {/* <Login/> */}
       {/* <Cookieapp /> */}
      {/* <hr /> */}
      {/* <CheckboxSF /> */}
      {/* <Occurence/> */}
      {/* <hr /> */}
      {/* <Formlogin/> */}
      {/* <hr /> */}
{/* <Codebox/> */}
      {/* <Formikapp />  */}
      <br/>
      {/* <ZoomImage/> */}
      <br/> 
      {/* <PdfViewer/> */}
      {/* <Folderupload/> */}
      {/* <StringMethod/> */}
      <Todos/>
      {/* <DownloadPrint/> */}
     
      {/* <ImageConversion/> */}
     {/* <TodoListCrud/>  */}
      {/* <Newfolderuplod/> */}
      {/* <MultiImage/> */}
      {/* <Printexcel/> */}
      {/* <Chartjs/> */}
      {/* <Conversion/> */}
      {/* <Practise/> */}
    </div>
  );
}

export default App;
