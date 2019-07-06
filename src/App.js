import React,{Component} from 'react';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import './App.css';
import { domainToASCII } from 'url';

class App extends Component{ 
  render(){
    return(
      <Router>
      <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">

                <div className="PageSwitcher">
                  <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                  <NavLink to="/sign-up" className="PageSwitcher__Item" activeClassName="PageSwitcher__Item--Active">Sign Up</NavLink>
                </div>

                  <div className="FormTitle">
                    <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>or<NavLink exact to ="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                  </div>

           <Route exact path = "/sign-up" component={SignUpForm}>  
           
            </Route> 
            
            <Route  path="/sign-in" component={SignInForm}>
               
            </Route>
        </div>
      </div>
      </Router>
    );
  }
}
export default App;
