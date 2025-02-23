import React, { useState } from "react";
import { Container, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BusTicketReservation = () => {
  const [showBoarding, setShowBoarding] = useState(true);

  return (
    <Container className="mt-5 border p-4" style={{ maxWidth: "600px" }}>
      <h2 className="text-center border-bottom pb-2">Select the boarding and dropping point</h2>
      <div className="d-flex justify-content-center mb-3">
        <Button
          variant={showBoarding ? "danger" : "secondary"}
          className="me-2"
          onClick={() => setShowBoarding(true)}
        >
          BOARDING POINT
        </Button>
        <Button
          variant={!showBoarding ? "danger" : "secondary"}
          onClick={() => setShowBoarding(false)}
        >
          DROPPING POINT
        </Button>
      </div>
      
      {showBoarding ? (
        <Table bordered hover>
          <tbody>
            <tr>
              <td><input type="radio" name="boarding" /></td>
              <td>23:20</td>
              <td>Collector Office <p>Collector Office Bus stop</p></td>
            </tr>
            <tr>
              <td><input type="radio" name="boarding" /></td>
              <td>23:30</td>
              <td>Balakumaran Puspha Theatre <p>PK Tours & Travels, 4th Street</p></td>
            </tr>
            <tr>
              <td><input type="radio" name="boarding" /></td>
              <td>23:40</td>
              <td>New Bus Stand <p>Uppilipalayam Bus Stop</p></td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <Table bordered hover>
          <tbody>
            <tr>
              <td><input type="radio" name="dropping" /></td>
              <td>04:45</td>
              <td>Attibele Toll <p>Attibele Exit Toll Plaza</p></td>
            </tr>
            <tr>
              <td><input type="radio" name="dropping" /></td>
              <td>04:55</td>
              <td>Bommasandra <p>In front of Adyar Bhavan</p></td>
            </tr>
            <tr>
              <td><input type="radio" name="dropping" /></td>
              <td>05:10</td>
              <td>Bangalore Bus Stand <p>Old Bus Stand</p></td>
            </tr>
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default BusTicketReservation;
