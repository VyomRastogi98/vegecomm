import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "../Main/Login-Signup/Login";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
function ProductNavigation() {
  const navigate = useNavigate();
  const [pageChange, setPageChange] = useState(false);
  const [pageChange1, setPageChange1] = useState(false);

  function change2() {
    navigate("/cart");
  }

  function change1() {
    navigate("/");
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
              <Nav.Link onClick={() => navigate("/productpage")}>
                PRODUCT
              </Nav.Link>
              <Nav.Link onClick={change2}>MY-CART</Nav.Link>
              <NavDropdown title="LOGOUT" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={change1}>LOGOUT</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ProductNavigation;
