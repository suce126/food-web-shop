import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
// import Input from './component/Input';
import Nav from './component/Nav'
import Footer from './component/Footer';
import AboutUs from './component/AboutUs'
import Home from './component/Home'
import Takeaway from './component/Takeaway';
import Contact from './component/Contact';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
          <Route exact path = '/' component = {Home}></Route>
          <Route path='/takeaway' component={Takeaway}></Route>
          <Route path='/contact' component={Contact}></Route>
         {/*  <Route path = '/details' component = {Details}></Route>
          <Route path = '/cart' component = {Cart}></Route>
          <Route path = '/product' component = {ProductList}></Route> */}
          <Route path = '/aboutus' component = {AboutUs}></Route>
          {/* <Route component = {Default}></Route> */}
        </Switch>
      {/* <Input/> */}
      <Footer/>
    </div>
  );
}

export default App;
