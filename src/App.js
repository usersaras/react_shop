import logo from './logo.svg';
import './App.css';
import React from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from './components/Navbar'
import Product from './components/Product'

import shopData from './data/shopData'

console.log(shopData[0]);
var x=true;







function App() {
  var [disp, setDisp] = React.useState(false);
  function toggleView(){
  // document.querySelector("#displayToggle").classList.toggle("flex-column");
  // document.querySelector(".columnToggle").classList.toggle("col-md-12")
  // document.querySelector(".elementsColumnToggle").classList.toggle("d-flex");

  // if (x===true){
  //   x=false;
  // } else{
  //   x=true;
  // }

  setDisp(function(oV){
    return !oV;
  });

  console.log(disp);
}

var shopComponent = shopData.map(function(element){
  return <Product 
  key = {element.id}
  {...element}
  isFav = {false}
  fDisp = {disp}
 
  />
})

  return (
    
    <div className="Wrapper">
      <Navbar />
      <div className="container py-5">
      
      Toggle View <input type="checkbox" onClick={toggleView} />
        <div id="displayToggle" className="row gx-2 gy-5">
          {/* <Product />
          <Product />
          <Product />
          <Product /> */}
          {shopComponent}
        </div>
      </div>
    </div>
  );
}

export default App;
