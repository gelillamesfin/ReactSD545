import React, { useState,useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/product-list';
import AddProduct from './components/add-product';
import Product from './types/product';


function App() {
 const [products,setProducts]=useState<Product[]>([])
 
useEffect(()=>{
  async function getProducts(){
    const response= await axios.get('http://localhost:8000/products');
    setProducts(response.data);
  }
    getProducts();
},[]);
const addNewProd=(prod:Product)=>{
  setProducts([...products,prod])
}

const deleteProductById = (id: number) => {
  const filtered=(products.filter(prod=>prod.Id !== id));
  setProducts(filtered)
};

  return (
    <div className="container">
      <ProductList
        products={products}
        onDeleteProduct={(id) => deleteProductById(id)}
      />
      <AddProduct onAddNewProd={addNewProd} />
    </div>
  );
}

export default App;
