import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';



function App() {
  return (
    <Router>
      <div className="app">
        <Header />
          <div className="container">
            <div className="wrapper">
              <div className="home">
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/opportunities' component={Sidda} />
                  <Route exact path='/solutions' component={AboutMe} />
                  <Route exact path='/contact-us' component={Contact} />
                </Switch>
              </div>
            </div>
          </div>
      </div>
    </Router>
  );
}

function Sidda() {
  return <p>I'm the biggest nerd ever!!!!</p>
}

function AboutMe() {
  return <p>I am ten years old and I live in Medfield ":)"</p>
}

function Contact() {
  return <ul>
    <li>1.Media Queries in Sass are so Cool!! just do include and put the device</li>
    <li>We need Babel to read stuff that the browser can't read including sass and JSX</li>
  </ul>
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          WE ARE <b>NERDS</b> AND WE LIKE <b>CODING!!</b>
        </h5>
      </div>
    </div>
  )
}



export default App;
