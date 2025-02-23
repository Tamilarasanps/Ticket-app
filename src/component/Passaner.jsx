import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Passanger = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    state: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form fields
    const { name, age, gender, state, email, phone } = formData;
    if (!name || !age || !gender || !state || !email || !phone) {
      alert("Please fill in all the fields.");
      return;
    }

    // Handle form validation and data submission here

    // If all fields are filled, navigate to the 'payment' page
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    navigate("/payment");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="container my-5">
      <Card className="shadow-lg border-primary">
        <Card.Body>
          <h2 className="text-center mb-4 text-primary">Passenger Details</h2>
          <Form onSubmit={handleSubmit}>
            {/* Passenger Information Card */}
            <Card className="mb-4 border-info">
              <Card.Header className="bg-info text-white">
                <i
                  className="fa regular fa-circle-user"
                  style={{ color: "white" }}
                ></i>{" "}
                Passenger Information
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Name"
                        className="border-info"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        id="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter Age"
                        className="border-info"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Gender</Form.Label>
                      <div>
                        <Form.Check
                          type="radio"
                          id="gender"
                          value="Male"
                          name="gender"
                          checked={formData.gender === "Male"}
                          onChange={handleChange}
                          label="Male"
                          className="text-info"
                        />
                        <Form.Check
                          type="radio"
                          id="gender"
                          value="Female"
                          name="gender"
                          checked={formData.gender === "Female"}
                          onChange={handleChange}
                          label="Female"
                          className="text-info"
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>State of Residence</Form.Label>
                      <Form.Control
                        as="select"
                        id="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="border-info"
                      >
                        <option value="">Select a State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Karnataka">Karnataka</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Contact Details Card */}
            <Card className="mb-4 border-warning">
              <Card.Header className="bg-warning text-dark">
                <i
                  className="fa-solid fa-envelope"
                  style={{ color: "white" }}
                ></i>{" "}
                Contact Details
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Email"
                        className="border-warning"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Phone Number"
                        className="border-warning"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="I have a GST number (optional)"
                    className="text-warning"
                  />
                </Form.Group>
              </Card.Body>
            </Card>

            {/* Cancellation Card */}
            <Card className="mb-4 border-danger">
              <Card.Header className="bg-danger text-white">
                <i className="fa-solid fa-ban" style={{ color: "white" }}></i>{" "}
                Free Cancellation
              </Card.Header>
              <Card.Body>
                <p>Valid till 6 hours before departure</p>
                <Row>
                  <Col>
                    <Form.Group className="radio-group mb-3">
                      <Form.Check
                        type="radio"
                        name="cancelling"
                        label="Add Free Cancellation"
                      />
                    </Form.Group>
                    <Form.Group className="radio-group mb-3">
                      <Form.Check
                        type="radio"
                        name="gender"
                        id="female"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleChange}
                        label="Female"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Travel Assurance Card */}
            <Card className="mb-4 border-success">
              <Card.Header className="bg-success text-white">
                Travel Assurance
              </Card.Header>
              <Card.Body>
                <Form.Group className="radio-group mb-3">
                  <Form.Check
                    type="radio"
                    name="assure"
                    label="Yes, Protect my trip for Rs.19"
                  />
                </Form.Group>
                <Form.Group className="radio-group mb-3">
                  <Form.Check
                    type="radio"
                    name="assure"
                    label="Don't add Assurance"
                  />
                </Form.Group>
              </Card.Body>
            </Card>

            {/* Travel Insurance Card */}
            <Card className="mb-4 border-primary">
              <Card.Header className="bg-primary text-white">
                <i
                  className="fa-solid fa-notes-medical"
                  style={{ color: "white" }}
                ></i>{" "}
                Travel Insurance
              </Card.Header>
              <Card.Body>
                <Form.Group className="radio-group mb-3">
                  <Form.Check
                    type="radio"
                    label="Secure your Trip with Travel Insurance for just Rs.10"
                  />
                </Form.Group>
              </Card.Body>
            </Card>

            {/* Payment Card */}
            <Card className="mb-4 border-danger">
              <Card.Body className="text-center">
                <h3>
                  Total Amount: INR <span id="busFare">1000</span>
                </h3>
                <Button
                  variant="danger"
                  type="submit"
                  id="button"
                  size="lg"
                  className="mt-3"
                >
                  PROCEED TO PAY
                </Button>
              </Card.Body>
            </Card>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Passanger;
