import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-3 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Logo</span>
        </a>
      </header>

      <div className="row justify-content-start">
        <div className="col-3">
          <div className="d-flex flex-column flex-shrink-0 p-3 border">
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/" element={<Navigate to="/home" />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
