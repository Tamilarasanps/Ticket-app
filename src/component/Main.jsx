import React, { useState } from "react";
import {
  Button,
  Form,
  Container,
  Navbar,
  Nav,
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bus from "../image/background_image.jpg";

function App() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    localStorage.setItem("source", source);
    localStorage.setItem("destination", destination);
    localStorage.setItem("date", date);
    if (source === "Tirupur" && destination === "Bangalore") {
      alert("Successfully");
      setTimeout(() => {
        // Assuming you are using react-router to navigate to "/bustype"
        window.location.href = "/bustype"; // Update with react-router if you want
      }, 1000);
    } else {
      alert("Please enter a valid source and destination.");
    }
  };

  return (
    <div>
      <img src={bus} alt="bus img" />
      {/* Navbar Component */}
      <Navbar
        expand="lg"
        className="bg-light py-3 fixed-top"
        style={{ zIndex: 9999 }}
      >
        <Navbar.Brand href="#">
          <img
            src="image/logo3.jpeg"
            alt="logo"
            style={{ height: "10vh", width: "15%" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Language
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">English</Dropdown.Item>
                <Dropdown.Item href="#">Tamil</Dropdown.Item>
                <Dropdown.Item href="#">Hindi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#">Help</Nav.Link>
            <Nav.Link href="#">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Main Content */}
      <Container className="d-flex justify-content-center align-items-center py-5 pt-5 mt-5">
        <Form
          onSubmit={handleSearch}
          className="bg-white p-4 rounded shadow-lg"
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <h2 className="text-center mb-4">Find Best Bus For You</h2>

          <Form.Group className="mb-3">
            <i
              className="fa-solid fa-bus me-2"
              style={{ fontSize: "20px", color: "rgb(214, 5, 5)" }}
            ></i>
            <Form.Control
              id="source"
              type="text"
              placeholder="Source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              style={{
                borderRadius: "10px",
                height: "50px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <i
              className="fa-solid fa-location-dot me-2"
              style={{ fontSize: "20px", color: "rgb(214, 5, 5)" }}
            ></i>
            <Form.Control
              id="destination"
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              style={{
                borderRadius: "10px",
                height: "50px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{
                borderRadius: "10px",
                height: "50px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100"
            style={{
              backgroundColor: "rgb(214, 5, 5)",
              fontWeight: "bold",
              fontSize: "1.1rem",
              borderRadius: "10px",
              color: "white",
              height: "50px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            Success
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
