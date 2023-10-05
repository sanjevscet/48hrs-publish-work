import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../src/logo.png";
import {
  BoxArrowInUpRight,
  GearWideConnected,
  PlusCircle,
  Reception4,
} from "react-bootstrap-icons";

export default function NavbarComponent() {
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
        <div className="d-flex justify-content-end">
          <Nav className="mr-auto" style={{ fontSize: 20 }}>
            <Link to="/skill" className="nav-link text-white">
              <GearWideConnected />
              <span className="ms-2">Skill Gap Analysis</span>
            </Link>
            <Link to="/create" className="nav-link text-white">
              <PlusCircle />
              <span className="ms-2">Publish Work</span>
            </Link>
            <Link to="/" className="nav-link text-white">
              <BoxArrowInUpRight />
              <span className="ms-2">Skill Gap</span>
            </Link>
            <Link to="/" className="nav-link text-white">
              <Reception4 />
              <span className="ms-2">Skill Gap</span>
            </Link>
            {/* <Link to="/create" className="nav-link text-white">
              <FontAwesomeIcon icon={faPlus} className="mr-1" />
              <span className="ms-1">Create Requirement</span>
            </Link>
            <Link to="/about" className="nav-link text-white">
              <FontAwesomeIcon icon={faPlus} className="mr-1" />
              <span className="ms-1">About</span>
            </Link> */}
          </Nav>
        </div>
      </div>
    </Navbar>
  );
}
