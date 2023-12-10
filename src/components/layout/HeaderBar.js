import Container from "react-bootstrap/Container";
import logo from "./gmail.png";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Inbox from "../Home/Inbox";

const HeaderBar = () => {
  const sc = useSelector((state) => state.counts.sentCount); // Using 'state.counts.sentCount' assuming 'counts' is the key for your reducer
  const ic = useSelector((state) => state.counts.inboxCount); // Similarly for 'inboxCount'

  console.log(sc, ic);
  return (
    <>
      <Navbar bg="body-tertiary" expand="lg" fixed>
        <Container fluid>
          <Navbar.Brand>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <img src={logo} alt="logo" width="30px" align-content="center" />{" "}
              Gmail
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-3">
              <Link to="/home/write" className="nav-link">
                Write
              </Link>
              <Link to="/home/inbox" className="nav-link">
                Inbox ({ic})
              </Link>
              <Link to="/home/starred" className="nav-link">
                Starred
              </Link>
              <Link to="/home/sent" className="nav-link">
                Sent ({sc})
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderBar;
