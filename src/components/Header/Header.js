import React, { useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
const Header = ({ setSearch }) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  useEffect(() => {}, [userInfo]);
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none" }}>
            Notes
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          </Nav>
          {userInfo ? (
            <Nav>
              <Nav.Link href="/mynotes">My Notes</Nav.Link>
              <img
                src={userInfo?.pic}
                alt={userInfo?.name}
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
              <NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">My profile</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
