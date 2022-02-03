import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


const Header: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Pharma Inc</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
