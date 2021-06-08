import React, {useState} from "react";

async function getProductsList(){
  const url = "http://3.21.164.220/products/";
  const response = await fetch(url); 
  const data = await response.json() 
  return data;
}

function App () {
  const [state, setState] = useState({data: []})
  const products = getProductsList()
  console.log(products)

  async function getProductsList(productID){
    const url = "http://3.21.164.220/products/{productID}"; 
    const response = await fetch(url); 
    const data = await response.json() 
    return data;
  }
  const specificProduct = getProductsList(1)

  return (
    <div>
      <h1>Test</h1>
    </div>


  )
}


export default App;
