import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
class App extends Component {
  render() { 
    return ( <div>
      <Router>
        <React.Fragment>
            <Navbar></Navbar>
            <Switch>
              <Route path='/' exact>
                <Home></Home>
              </Route>
              <Route path='/about'>
                <About></About>
              </Route>
            </Switch>
        </React.Fragment>
      </Router>
    </div> );
  }
}
 
export default App;