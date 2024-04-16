import React,{FormEvent,useState,ChangeEvent} from 'react'
import axios from 'axios'
import Product from '../types/product';



type Props={
    onAddNewProd:(prod:Product)=>void;
}
export default function AddProduct(props:Props) {
 const [addProduct, setProduct] = useState<Product>({title:'',price:0,description:''});
const {onAddNewProd}=props;
const {title,price,description}=addProduct

const changeInput=(e:ChangeEvent<HTMLInputElement>)=>{
    const{name,value}=e.target;
    setProduct({...addProduct,[name]:value})
}
const changeDescription =(e:ChangeEvent<HTMLTextAreaElement>)=>{
    setProduct({...addProduct,description:e.target.value})
}
const submitForm=async (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const response=await axios.post('http://localhost:8000/products',{title,price,description})
    if(response.status===201){
        onAddNewProd(response.data)
        setProduct({title:'',price:0,description:''})
    }
}
 
    return (
        <div>
            <h2>Add a new Product</h2>
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input className="form-control" id="title" value={title} name='title' onChange={changeInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" value={price} name='proce' onChange={changeInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows={3} onChange={changeDescription} value={description}></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form></div>
    )
}