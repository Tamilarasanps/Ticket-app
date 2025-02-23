import React, { useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SeatReservation = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = [
    { id: "1L", status: "available" },
    { id: "3L", status: "available" },
    { id: "5L", status: "occupied" },
    { id: "7L", status: "available" },
    { id: "9L", status: "available" },
    { id: "11L", status: "available" },
    { id: "2L", status: "available" },
    { id: "4L", status: "occupied" },
    { id: "6L", status: "available" },
    { id: "8L", status: "available" },
    { id: "10L", status: "available" },
    { id: "12L", status: "available" },
    { id: "1F", status: "occupied" },
    { id: "2F", status: "available" },
    { id: "3F", status: "occupied" },
    { id: "4F", status: "occupied" },
    { id: "5F", status: "available" },
    { id: "6F", status: "available" },
    { id: "1U", status: "available" },
    { id: "3U", status: "available" },
    { id: "5U", status: "occupied" },
    { id: "7U", status: "available" },
    { id: "2U", status: "available" },
    { id: "4U", status: "occupied" },
    { id: "6U", status: "available" },
    { id: "8U", status: "available" },
  ];

  const handleSeatClick = (seat) => {
    if (seat.status !== "occupied") {
      setSelectedSeats((prevSelectedSeats) => {
        if (prevSelectedSeats.includes(seat.id)) {
          return prevSelectedSeats.filter((id) => id !== seat.id); // Deselect if already selected
        } else {
          return [...prevSelectedSeats, seat.id]; // Add to selected if not already selected
        }
      });
    }
  };

  const handleProceed = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat before proceeding.");
    } else {
      // Store selected seats in localStorage
      localStorage.setItem("selectSeatNumber", selectedSeats); // Where `selectedSeatNumber` is the seat the user selected

      // Navigate to the passenger details page

      window.location.href = "/passanger";
    }
  };

  return (
    <Container className="mt-4">
      {/* Lower Deck Card */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title
            className="text-center text-uppercase"
            style={{ color: "#004085" }}
          >
            Lower Deck
          </Card.Title>
          <Row className="justify-content-center">
            {/* Left Column */}
            <Col
              xs={12}
              md={6}
              className="d-flex flex-wrap justify-content-center"
            >
              {seats
                .filter(
                  (seat) => seat.id.includes("L") && seat.status !== "occupied"
                )
                .slice(0, 6)
                .map((seat) => (
                  <Card
                    key={seat.id}
                    className={`bus-seat ${seat.status}`}
                    style={{
                      width: "80px",
                      height: "35px",
                      margin: "8px",
                      cursor: "pointer",
                      backgroundColor:
                        seat.status === "available"
                          ? selectedSeats.includes(seat.id)
                            ? "#ffc107" // Highlight selected seat
                            : "#28a745"
                          : "#dc3545", // For occupied seats
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => handleSeatClick(seat)}
                  >
                    <Card.Body style={{ margin: 0, fontSize: "14px" }}>
                      {seat.id}
                    </Card.Body>
                  </Card>
                ))}
            </Col>

            {/* Right Column */}
            <Col
              xs={12}
              md={6}
              className="d-flex flex-wrap justify-content-center"
            >
              {seats
                .filter(
                  (seat) => seat.id.includes("L") && seat.status !== "occupied"
                )
                .slice(6, 12)
                .map((seat) => (
                  <Card
                    key={seat.id}
                    className={`bus-seat ${seat.status}`}
                    style={{
                      width: "80px",
                      height: "35px",
                      margin: "8px",
                      cursor: "pointer",
                      backgroundColor:
                        seat.status === "available"
                          ? selectedSeats.includes(seat.id)
                            ? "#ffc107" // Highlight selected seat
                            : "#28a745"
                          : "#dc3545", // For occupied seats
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => handleSeatClick(seat)}
                  >
                    <Card.Body style={{ margin: 0, fontSize: "14px" }}>
                      {seat.id}
                    </Card.Body>
                  </Card>
                ))}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Upper Deck Card */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title
            className="text-center text-uppercase"
            style={{ color: "#004085" }}
          >
            Upper Deck
          </Card.Title>
          <Row className="justify-content-center">
            {/* Left Column */}
            <Col
              xs={12}
              md={6}
              className="d-flex flex-wrap justify-content-center"
            >
              {seats
                .filter(
                  (seat) => seat.id.includes("U") && seat.status !== "occupied"
                )
                .slice(0, 4)
                .map((seat) => (
                  <Card
                    key={seat.id}
                    className={`bus-seat ${seat.status}`}
                    style={{
                      width: "80px",
                      height: "35px",
                      margin: "8px",
                      cursor: "pointer",
                      backgroundColor:
                        seat.status === "available"
                          ? selectedSeats.includes(seat.id)
                            ? "#ffc107" // Highlight selected seat
                            : "#28a745"
                          : "#dc3545", // For occupied seats
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => handleSeatClick(seat)}
                  >
                    <Card.Body style={{ margin: 0, fontSize: "14px" }}>
                      {seat.id}
                    </Card.Body>
                  </Card>
                ))}
            </Col>

            {/* Right Column */}
            <Col
              xs={12}
              md={6}
              className="d-flex flex-wrap justify-content-center"
            >
              {seats
                .filter(
                  (seat) => seat.id.includes("U") && seat.status !== "occupied"
                )
                .slice(4, 8)
                .map((seat) => (
                  <Card
                    key={seat.id}
                    className={`bus-seat ${seat.status}`}
                    style={{
                      width: "80px",
                      height: "35px",
                      margin: "8px",
                      cursor: "pointer",
                      backgroundColor:
                        seat.status === "available"
                          ? selectedSeats.includes(seat.id)
                            ? "#ffc107" // Highlight selected seat
                            : "#28a745"
                          : "#dc3545", // For occupied seats
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => handleSeatClick(seat)}
                  >
                    <Card.Body style={{ margin: 0, fontSize: "14px" }}>
                      {seat.id}
                    </Card.Body>
                  </Card>
                ))}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Proceed Button */}
      <Row className="justify-content-center">
        <Col xs={12} md={4}>
          <Button
            variant="danger"
            size="lg"
            onClick={handleProceed}
            style={{
              marginTop: "4%",
              width: "100%",
              backgroundColor: "#28a745",
              borderColor: "#28a745",
            }}
          >
            Proceed
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SeatReservation;
