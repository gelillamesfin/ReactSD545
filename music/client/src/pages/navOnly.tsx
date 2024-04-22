import { NavLink } from 'react-router-dom'
import logo from '../img/piano.jpeg'

export default function NavOnly() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ justifyContent: "space-between" }}
          >
            <img src={logo} alt="piano Logo" style={{ height: "100px" }} />
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search For a Song"
                aria-label="Search"
                // value={keyWord}
                // onChange={(e) => handleSearch(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div>
              <NavLink to="/login">
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  style={{
                    display: "flex",
                    marginLeft: "3px",
                    alignItems: "end ",
                  }}
                >
                  Log Out
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
