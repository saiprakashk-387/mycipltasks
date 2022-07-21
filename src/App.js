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

function App() {
  const [cookies, setCookie] = useCookies();
 
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    // uri: 'https://integration.weavit.ai/graphql',https://api.spacex.land/graphql
    cache: new InMemoryCache()
  });
  
  return (
    <div className="App">
      <ApolloProvider client={client}>
        {/* <Graph /> */}
        {/* <Graph1/> */}       
      </ApolloProvider>
      <h2>
        {cookies.user && <p>{cookies.user}</p>}  </h2>
      {/* <List/> */}
      {/* <TreeView/> */}
      {/* <Table/> */}
      {/* <Example/> */}
      {/* <NewList/> */}
      {/* <hr /> */}
      {/* <Userinput/> */}
      {/* <Ref/> */}
      {/* <hr /> */}
       <Images />
      <hr />
      {/* <Googleauth /> */}
      <hr />
      {/* <Cookieapp /> */}
      {/* <hr /> */}
      <CheckboxSF />
      <Occurence/>
      {/* <hr /> */}
      {/* <Formlogin/> */}
      {/* <hr /> */}
<Codebox/>
      {/* <Formikapp />  */}
    </div>
  );
}

export default App;
