import React from'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import CategoryMain from './components/Categorymain';
import CSEBooks from './components/CSEBooks';

/*
<div style={{float : "left", marginTop : 120, fontSize : 50}}>
  <NavLink exact to="/login">Login</NavLink>
</div>
s*/

//withRouter not working!

class App extends React.Component{
  render(){
    return(
      <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/categorymain" component={CategoryMain}/>
          <Route path="/snh" component={CSEBooks}/>
          <Route path="/cse" component={CSEBooks}/>
        </Switch>
      </Router>
      </div>
    );
  }
}
  export default App;
