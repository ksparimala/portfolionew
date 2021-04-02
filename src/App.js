import React from 'react';
// import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Projects from './components/Projects';
function App() {
  return (
      <Router>
        <nav>
          <h2>FULL STACK MERN DEVELOPER</h2>
          <ul>
            <li><Link to="/Home">Profile</Link></li>
            <li><Link to="/Experience">Experience</Link></li>
            <li><Link to="/Tech">TechnicalSkills</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
          </ul>
        </nav>
        <data>
          <ul>
            <li>NAME:     K.S.PARIMALA</li>                                       
            <li>MAIL-ID:       kakularapuparimala@gmail.com</li>
            <li>PHONE-NUMBER:       +919618188292</li>
            <li><p><b>CARRIER OBJECTIVE:</b>   To work with an organization that gives me an opportunity 
            to integrate all my skills and apply them together to work with vibrating enthusiasm, 
            leading towards the achievement of the goals of the organization.</p></li>
            </ul>
          </data>
          
       <Switch>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/Experience">
          <Experience/>
        </Route>
        <Route path="/Tech">
          <Tech/>
        </Route>
        <Route path="/Projects">
          <Projects/>
        </Route>
        </Switch> 
      </Router>
  );
}

export default App;
