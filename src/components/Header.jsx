import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { Themecontext } from "../context/Themecontext";
import ThemeSelector from "./ThemeSelector";

function Header() {
  const[term, setTerm] = useState('')
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/create");
  };
  
  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${term}`);
  }

  //use the context
  const {color} = useContext(Themecontext)
  
  return (
    <div>
      <Navbar  expand="lg" className="sticky-top" style={{backgroundColor:color}}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="text-white logo ms-lg-5 ">Recipe</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <div className="pt-2 mx-5 d-none d-md-inline-block"><ThemeSelector/></div>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 navlink ms-5"
              navbarScroll
              style={{ fontSize: "16px", fontWeight: "500" }}
            >
            </Nav>
            <button onClick={handleclick}className=" m-auto button mb-lg-0 mb-3">Create Recipe</button>
            <Form className="d-flex mx-lg-auto" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                value={term}
                onChange={(e)=> setTerm(e.target.value)}
                aria-label="Search"
              />
              <Button variant="outline-success text-white" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
