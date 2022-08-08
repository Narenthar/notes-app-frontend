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
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAACdCAMAAAD2bIHgAAAAYFBMVEX///8AsbEArq4ArKzr+fmV1dVYwcF/0tJMw8P5/f3Y7+/M7u46vr7c8vKz4+OG0dFox8ed2tqp4OC85OTU8fHu+voeubl0z89dycnk9vaH19fH7OyR2to0u7tTxcWk4OAATq4GAAAEH0lEQVR4nO3d23aiMBQGYBKYESoyReWgKL7/W45lJ0gZ21J3Uhn2/132Yq+VvzGEQ5IgAAAAAAAAAAAAAAAAAAAAAABwJzk02/wXQ75tNsmzW/FE+2OqQs0U6nPVPLslz5FkqdbKCa3LvHh2e37ePnWUn0mxzJ7doh+WVKHTBK/COHp2q35S9L4LPj4Qvu+IgobEjdK39NQ5/v24VA2C1GJ+zAeb4PUycFpHrDlJUmzy+BaikAyL0iYY79xU3Nd9hms3FWeupfZqdXFXszH/Fl1KmNzkoWns3mXVyP5japdV5+lgfsRnx1OQxPyYtaPBYcYqaml5cF04oYmSTl0XnhvbCT1M4WzppV+Vj9RVKh+1L1S79VF7PpKSuoqfezFzz7PxUnwu1tRRjn6qb6m6w8nSDJ26Roae+gn18YXPa2j2VvoqbyY2vsrPwtnfxeQNXVDUou9QlN/BqqH6S76eJNrXpJBsKEKnt44zk3T3x+G/TSw2hHnPQrPrcMmPa0yEL+O/5yokumaNY5HYCLPw9vSeNSORG+Hr8B0I58YFEXZoOPwVTqFHhRDhIMJ82jvSUSFEiAi/hgjZECHbdy4nUz7qQoTWnQhfsklGheRGeLpFqFPOxw1yIyzS/merWO8w5UYYJJeKHHnPqQRH6AoiZEOEbIiQDRGyIUI2RMiGCNkQIZvgCKPKLJxoed+oyo2wX0WhdJhz6suNcDV42MX6ZF9uhHeeFzarP1OMCiHCQYT5pHXKeGpt4d3JdIiQDRGyfWcsnBAgxsLenQi353SKUSG5EVaYF072QYTr25rscMWpLzfCYJfaPnhkrZEXHGGQFIS58ZHkCB1BhGyIkA0RsiFCNkTIhgjZECGb5Aj3O8JcIyo4wto+5g9L1jeaciPcDpYxxpz6ciO8s4zRLlD+wqgQIuzgDd6n8O6EDRGyIUI2RMjmelU8IrTuTGqi/SSjQnIjvGBqPdkHESZ1P9PjbZIrN8IgaLYk4+1YJiFC2r4Qe3Y9LqEmbn3VX1P9Je8cF9A2l6yPPj5DO5F62il2JuKujd62nq4E7KJp9mT21U1K/rxo9hqKkLW45MvqJz/VZ6KgCXTp59w1c1TCki/IgR2t/HSUnYxN/vd6+DDBKbNz+8J3Bg/s1tO8HX0+q+xrkJgR0w1167qlRy2kE/ZrFnXrdgNvW3bZMxqSnO0xTQ5vlQ+xfeS46Js7a2MfDarKUXuLU38s3NLPizGa/vmqqjPeMXhXRVPdVoQve1Y9kA0PY0zravWw6jUtB6cxejpHZY7ssXUmRg41IOBifHNwe7Rv95+QdKpqJ1dOQ7xemxZ9ysldh5VydUr323Vp4c8WPlBcWuZAaIbD9OThlvt/Ee3yqm7jh7V1dcoE5wcAAAAAAAAAAAAAAAAAAAAAHvwF0JFFwLZn3IsAAAAASUVORK5CYII="
              alt={userInfo?.name}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
              }}
            />
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
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
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
