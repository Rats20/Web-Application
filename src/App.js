mport React from'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import CategoryMain from './components/Categorymain';
import SnHBooks from './components/SnHBooks/SnHBooks';
import PhysicsCycle from './components/SnHBooks/PhysicsCycle';
import EngineeringPhysics from './components/SnHBooks/EngineeringPhysics';
import Python from './components/SnHBooks/Python';
import ChemistryCycle from './components/SnHBooks/ChemistryCycle';
import EngineeringChemistry from './components/SnHBooks/EngineeringChemistry';
import CSEBooks from './components/CSEBooks/CSEBooks';
import ECEBooks from './components/ECEBooks/ECEBooks';
import EEEBooks from './components/EEEBooks/EEEBooks';
import MEBooks from './components/MEBooks/MEBooks';
import CVBooks from './components/CVBooks/CVBooks';
import BTBooks from './components/BTBooks/BTBooks';

class App extends React.Component{
  render(){
    return(
      <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/categorymain" component={CategoryMain}/>
          <Route exact path="/snh" component={SnHBooks}/>
          <Route exact path="/snh/phy" component={PhysicsCycle}/>
          <Route path="/snh/phy/ep" component={EngineeringPhysics}/>
          <Route path="/snh/phy/python" component={Python}/>
          <Route exact path="/snh/chem" component={ChemistryCycle}/>
          <Route path="/snh/chem/ec" component={EngineeringChemistry}/>
          <Route exact path="/cse" component={CSEBooks}/>
          <Route path="/ece" component={ECEBooks}/>
          <Route path="/eee" component={EEEBooks}/>
          <Route path="/me" component={MEBooks}/>
          <Route path="/civ" component={CVBooks}/>
          <Route path="/bt" component={BTBooks}/>
          <Route path="/others" component={CSEBooks}/>
        </Switch>
      </Router>
      </div>
    );
  }
}
  export default App;
