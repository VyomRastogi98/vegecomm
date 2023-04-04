import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Routes, Route, useNavigation } from "react-router-dom";
import UserLogin from "../Main/Login-Signup/Login";
import { useNavigate } from "react-router-dom";
import FirstProdimp from "../Main/FirstProduct/FirstProductImp";

function Navigation() {
  const navigate = useNavigate();
  const [pageChange, setPageChange] = useState(false);
  function change1() {
    setPageChange(true);
    navigate("/userlogin");
  }
  function changeSignUp() {
    navigate("/userregistration");
  }
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand>VeggiesDelivery</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>HOME</Nav.Link>
              <NavDropdown title="LOGIN" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={change1}>
                  USER LOGIN
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={changeSignUp}>SIGN-UP</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* products  */}

      <FirstProdimp />
    </>
  );
}

export default Navigation;
