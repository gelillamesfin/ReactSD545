import { NavLink,Navigate,Route,Routes } from 'react-router-dom';
import logo from './images/logo.jpg'
import'./App.css'
import ProductListPage from './pages/Product/productListPage';
import AddProduct from './pages/Product/addProduct';
export default function App() {

  return (
    <div className="container">
      <header className="p-3 text-bg-dark mt-2">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img src={logo} alt="Product Logo" style={{ width: "8%" }}></img>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><NavLink
                  to="/products"
                  className="nav-link px-2 text secondary"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/add" className="nav-link px-2 text secondary ">
                  Add
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/products" element={<ProductListPage />}></Route>
        <Route path="/add" element={<AddProduct />}></Route>
        <Route path='/' element={<Navigate to='/products'/>}></Route>
      </Routes>
    </div>
  );
}
