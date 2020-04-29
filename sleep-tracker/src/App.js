import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'

import Home from './components/Home.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Dashboard from './components/Dashboard.js';
import SleepView from './components/sleepdata/SleepView.js'
import EntryView from './components/EntryView.js';

/*
TODO: Import and route components:
  √  "/"           --> Home.js (exact!)
  √  "/login"      --> Login.js
  √  "/signup"    --> Signup.js
  √  "/dashboard"  --> Dashboard.js
  √  "/optimal-sleep" --> OptimalSleep.js
  √  "/weekly-view:start-date" --> WeeklyView.js
  √  "/entry"      --> EntryView.js (exact!)
  √  "/entry:date" --> EntryView.js 

    ***Components are already set up so they can be imported.

*/

function App() {
  return (
    <div>
      <Switch>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signup'>
          <Signup />
        </Route>

        <PrivateRoute path='/dashboard' component = {Dashboard}/>

        <PrivateRoute path='/view-sleep-data' component = {SleepView}/>
        
        {/* <PrivateRoute path ='/entry/:date' component = {EntryView}/> */}
        

        <PrivateRoute path='/new-entry' component = {EntryView}/>
        

        <PrivateRoute path='/' component = {Home}/>
        

      </Switch>
    </div>
  );
}

export default App;
