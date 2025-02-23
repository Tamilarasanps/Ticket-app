import React, { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap"; // Importing Bootstrap components
import { useNavigate } from "react-router-dom";

const Ticket = () => {
  const [ticketNumber, setTicketNumber] = useState(null);
  const [pnrNumber, setPnrNumber] = useState(null);
  const [busDetails, setBusDetails] = useState(null);
  const [passengerDetails, setPassengerDetails] = useState({
    name: "",
    age: "",
    seat: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedTicketNumber = Math.floor(Math.random() * 90000000) + 10000000;
    setTicketNumber(storedTicketNumber);

    const storedPnrNumber = generatePnrNumber();
    setPnrNumber(storedPnrNumber);

    const storedBusDetails = JSON.parse(localStorage.getItem("selectedBus"));
    if (storedBusDetails) {
      setBusDetails(storedBusDetails);
    }

    const storedPassengerDetails = {
      name: localStorage.getItem("name"), // Correct key
      age: localStorage.getItem("age"), // Correct key
      seat: localStorage.getItem("selectSeatNumber"),
    };
    setPassengerDetails(storedPassengerDetails);
  }, []);

  const generatePnrNumber = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let pnrNumber = "";
    for (let i = 0; i < 8; i++) {
      pnrNumber += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return pnrNumber;
  };

  const transferTicket = () => {
    alert("Navigating to Transfer Ticket screen...");
    navigate("/tickettransfer");
  };

  const downloadTicket = () => {
    alert("Ticket downloaded successfully!");
  };

  const cancelTicket = () => {
    alert("Ticket booking cancelled.");
  };

  return (
    <div className="container mt-4">
      <Card className="shadow-lg p-4">
        <Row className="mb-4">
          <Col className="d-flex justify-content-between">
            <h2 className="text-muted">FBB Ticket</h2>
            <img
              src="./path_to_logo_image"
              alt="Logo"
              className="img-fluid"
              style={{ width: "100px", height: "50px" }}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col className="text-center">
            <p className="h5 text-primary">
              {localStorage.getItem("source")} to{" "}
              {localStorage.getItem("destination")}
            </p>
            <p className="text-muted">{localStorage.getItem("date")}</p>
          </Col>
        </Row>

        <Row className="mb-3 text-center">
          <Col>
            <p className="text-secondary">
              Ticket No:{" "}
              <span className="font-weight-bold">{ticketNumber}</span>
            </p>
            <p className="text-secondary">
              PNR No: <span className="font-weight-bold">{pnrNumber}</span>
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            {busDetails ? (
              <>
                <h3 className="text-center text-info">{busDetails.busName}</h3>
                <Row>
                  <Col className="text-center">
                    <h5>Boarding Point</h5>
                    <p>{busDetails.source}</p>
                  </Col>
                  <Col className="text-center">
                    <h5>Dropping Point</h5>
                    <p>{busDetails.destination}</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <h5>Departure Time</h5>
                    <p>{busDetails.departureTime}</p>
                  </Col>
                  <Col className="text-center">
                    <h5>Arrival Time</h5>
                    <p>{busDetails.arrivalTime}</p>
                  </Col>
                </Row>
              </>
            ) : (
              <p>No Bus Details Found</p>
            )}
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <p className="h6">Traveller(s): {passengerDetails.name}</p>
            <p className="h6">Age: {passengerDetails.age}</p>
            <p className="h6">Seat(s): {passengerDetails.seat}</p>
            <p className="h6 text-success">Status: Confirmed</p>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col className="text-right">
            <p className="h6 font-weight-bold">Fare: ₹ 1200</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="d-flex justify-content-center gap-3">
            <Button variant="primary" onClick={transferTicket}>
              Transfer Ticket
            </Button>
            <Button variant="success" onClick={downloadTicket}>
              Download Ticket
            </Button>
            <Button variant="danger" onClick={cancelTicket}>
              Cancel Booking
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Ticket;
