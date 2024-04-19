import React,{useEffect, useState} from 'react'
import Product from '../../types/productType';
import productService from '../../apis/Services/productService'
import Pubsub from 'pubsub-js'

export default function List() {
    const [products,setProducts]=useState<Product[]>([]);
    
    
    useEffect(()=>{
        async function getProducts(){
            try{
          const response= await productService.getAll()
          setProducts(response.data)
        }catch{
           console.log('error fetching') 
        }
    }
        getProducts();
    }//add clean up here 
    ,[])
    const showDetail=(prod:Product)=>{
   PubSub.publish('product',prod)
    }
      return (
    
        <div className="col">
          <ul className="list-group">
       {products.map(prod=><li key={prod.id} className='list-group-item list-group-item-action' onClick={()=>showDetail(prod)}>{prod.title}</li>)}
          </ul>
        </div>
  );
}
