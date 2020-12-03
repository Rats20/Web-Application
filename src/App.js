import React from'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import CategoryMain from './components/Categorymain';
import SnHBooks from './components/SnHBooks';
import CSEBooks from './components/CSEBooks';

class App extends React.Component{
  render(){
    return(
      <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/categorymain" component={CategoryMain}/>
          <Route path="/snh" component={SnHBooks}/>
          <Route path="/cse" component={CSEBooks}/>
          <Route path="/ece" component={CSEBooks}/>
          <Route path="/eee" component={CSEBooks}/>
          <Route path="/me" component={CSEBooks}/>
          <Route path="/civ" component={CSEBooks}/>
          <Route path="/bt" component={CSEBooks}/>
          <Route path="/others" component={CSEBooks}/>
        </Switch>
      </Router>
      </div>
    );
  }
}
  export default App;
