import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import Thierno from './components/Thierno';
import Ibrahim from './components/Ibrahim';
import Madian from './components/Madian';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <div className='main'>
          <Route exact path="/" component={Home}/>
          <Route path="/thierno" component={Thierno}/>
          <Route path="/ibrahim" component={Ibrahim}/>
          <Route path="/madian" component={Madian}/>
        </div>
      </div>
    </BrowserRouter>    
  );
}

export default App;
