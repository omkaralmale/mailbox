import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import menu from "./menu.png";
import logo from "./gmail.png";

const HeaderBar = () => {
  // const pro = useSelector((state) => state.premium.pro);
  // const API_KEY = "AIzaSyBtmDXCvrD-2FXli9q45y819O4fB10sh1M";
  // const history = useNavigate();
  // const dispatch = useDispatch();
  // // console.log(AuthContext);
  // // console.log(context);
  // const handleLogOut = () => {
  //   // console.log(context);
  //   // console.log(context.logout);
  //   dispatch(logout());
  //   localStorage.removeItem("userEmail");
  //   localStorage.removeItem("proLocal");
  //   history("/login");
  // };

  // const handleInfo = async () => {
  //   // const userEmail = localStorage.getItem("userEmail");
  //   const token = localStorage.getItem("token");
  //   try {
  //     const response = await fetch(
  //       `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`,
  //       {
  //         method: "POST",
  //         body: JSON.stringify({
  //           requestType: "VERIFY_EMAIL",
  //           idToken: token,
  //         }),
  //       }
  //     );
  //     if (!response.ok) {
  //       const data = await response.json();
  //       throw new Error(data);
  //     }

  //     const data = await response.json();
  //     alert("Check your  Mail", data);
  //     // console.log(data);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed>
      <Container fluid>
        <Navbar.Brand href="/home">
          {/* <img src={menu} alt="logo" width="20px" align-content="center" />{" "} */}
          <img src={logo} alt="logo" width="30px" align-content="center" />{" "}
          Gmail
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default HeaderBar;
