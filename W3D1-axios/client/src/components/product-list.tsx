
import Product from "../types/product";


type Props={
    products:Product[]
  onDeleteProduct:(id:number)=>void;

}

export default function ProductList(props:Props) {
//const [updateProduct,setUpateProduct]=useState(props.products)
   const {products,onDeleteProduct}=props;

   const handleDelete=(productId:number)=>{
       if (window.confirm("Are you sure?")) {
         onDeleteProduct(productId);
       }
     };
   
   
    return (
      <div>
        <h2>Product List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod => (
              <tr key={prod.Id}>
                <th scope="row">{prod.Id}</th>
                <td>{prod.title}</td>
                <td>{prod.price}</td>
                <td>{prod.description}</td>
                <td><button className='btn btn-danger' onClick={()=>handleDelete(prod.Id)}>Delete</button></td>
              </tr>
            )))}
          </tbody>
        </table>
      </div>
    );
}
