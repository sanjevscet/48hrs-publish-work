import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../src/logo.png";
import {
  BoxArrowInRight,
  BoxArrowInUpRight,
  GearWideConnected,
  PlusCircle,
  Reception4,
} from "react-bootstrap-icons";

export default function NavbarComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  const segment = location.pathname.split("/");

  const isActive = (path: string): string => {
    const res = segment[segment.length - 1] === path ? "active" : "";
    console.log({ res, path, segment, las: segment[segment.length - 1] });
    return res;
  };

  const role = sessionStorage.getItem("role");

  const logoutClickHandler = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <Navbar style={{ backgroundColor: "#005151" }}>
      <div className="container-fluid text-white">
        <div>
          <Link to="/" className="nav-link text-white">
            <Navbar.Brand className="text-white">
              <i className="fa fa-bars mr-2" aria-hidden="true"></i>

              <img
                className="ms-2"
                src={logo}
                alt="logo"
                style={{ width: 120, height: 50, padding: 10 }}
              />
            </Navbar.Brand>
          </Link>
        </div>
        {role && role === "manager" && (
          <div className="d-flex justify-content-end">
            <Nav className="mr-auto" style={{ fontSize: 20 }}>
              <Link
                to="/create"
                className={`nav-link text-white ${isActive("create")}`}
              >
                <PlusCircle />
                <span className="ms-2">Publish Work</span>
              </Link>
              <Link
                to="/skill"
                className={`nav-link text-white ${isActive("skill")}`}
              >
                <GearWideConnected />
                <span className="ms-2">Skill Gap Analysis</span>
              </Link>
              <Link
                to="/list"
                className={`nav-link text-white ${isActive("list")}`}
              >
                <Reception4 />
                <span className="ms-2">Requirement List</span>
              </Link>
              <Link
                to="/predict"
                className={`nav-link text-white ${isActive("predict")}`}
              >
                <BoxArrowInUpRight />
                <span className="ms-2">Predict Workforce Requirement</span>
              </Link>
              <Button
                className={`nav-link text-white submit-button`}
                onClick={logoutClickHandler}
              >
                <BoxArrowInRight />
                <span className="ms-2">Logout</span>
              </Button>
            </Nav>
          </div>
        )}

        {role && role === "developer" && (
          <div className="d-flex justify-content-end">
            <Nav className="mr-auto" style={{ fontSize: 20 }}>
              <Link
                to="/list"
                className={`nav-link text-white ${isActive("list")}`}
              >
                <Reception4 />
                <span className="ms-2">Requirement List</span>
              </Link>
              <Button
                className={`nav-link text-white submit-button`}
                onClick={logoutClickHandler}
              >
                <BoxArrowInRight />
                <span className="ms-2">Logout</span>
              </Button>
            </Nav>
          </div>
        )}
      </div>
    </Navbar>
  );
}
