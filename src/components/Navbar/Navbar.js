import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "./style.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav
        style={{ backgroundColor: "#F7F9BC" }}
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <HomeIcon
                  sx={{
                    marginTop: 1,
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => navigate("/")}
                />
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  हमारे बारे में
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/about">
                      विद्यालय के बार में
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faculties">
                      हमारे अध्यापक
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/other-members">
                      हमारे सहयोगी
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/manager">
                      प्रबन्धक संदेश
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/message">
                      प्रधानाचार्य संदेश
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/gallery"
                >
                  गैलरी
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact-us"
                >
                  संपर्क करें
                </Link>
              </li>
              {/* <li>
                <Login />
              </li> */}
              {/* {typeof token !== "undefined" && (
                <Button onClick={handleAdmin}>Admin</Button>
              )} */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
