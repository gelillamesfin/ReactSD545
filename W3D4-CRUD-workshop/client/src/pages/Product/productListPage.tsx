import React,{useEffect,useState} from 'react';
import ListPage from '../../components/List/ListPage';
import DetailComponent from '../../components/List/detailComponent';
import productService from '../../apis/Services/productService';
import Product from '../../types/productType';


export default function ProductListPage() {
const [products,setProducts]=useState<Product[]>([]);
useEffect(()=>{
  async function getProducts(){
    const response= await productService.getAll();
    setProducts(response.data)
  }
  getProducts()
},[])
  const deleteProductById=(id:number)=>{
    setProducts(products.filter(p=>p.id !==id))
  }
  return (
    <div className="row mt-5">
      <ListPage />
      <DetailComponent onDeleteProductById={deleteProductById} />
    </div>
  );
}
