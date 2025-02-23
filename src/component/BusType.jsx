// BusType.jsx
import React, { useState, useEffect } from "react";
import { FaBus, FaCalendarAlt, FaMapPin } from "react-icons/fa";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Table,
} from "react-bootstrap";

const BusType = () => {
  const [source, setSource] = useState(localStorage.getItem("source") || "");
  const [destination, setDestination] = useState(
    localStorage.getItem("destination") || ""
  );
  const [date, setDate] = useState(localStorage.getItem("date") || "");

  useEffect(() => {
    localStorage.setItem("source", source);
    localStorage.setItem("destination", destination);
    localStorage.setItem("date", date);
  }, [source, destination, date]);

  const view = (busDetails) => {
    localStorage.setItem("selectedBus", JSON.stringify(busDetails));
  };

  const busData = [
    {
      busName: "Veenky Travels",
      departureTime: "23:30",
      arrivalTime: "05:30",
      source: "Balakumaran Puspha Theatre",
      destination: "Kalasipalayam",
      fare: 650,
      seatsAvailable: 19,
    },
    {
      busName: "City Travels",
      departureTime: "21:00",
      arrivalTime: "03:00",
      source: "Avinashi",
      destination: "Bangalore",
      fare: 750,
      seatsAvailable: 19,
    },
    {
      busName: "Furious Travels",
      departureTime: "22:00",
      arrivalTime: "04:00",
      source: "Tirupur New Bus Stand",
      destination: "Bangalore",
      fare: 1050,
      seatsAvailable: 19,
    },
    {
      busName: "Air Travels",
      departureTime: "23:45",
      arrivalTime: "05:45",
      source: "Avinashi",
      destination: "Bangalore",
      fare: 1650,
      seatsAvailable: 19,
    },
  ];

  return (
    <div className="content">
      <div className="input-section">
        <Container>
          <Row className="my-4">
            <Col md={3}>
              <InputGroup>
                <InputGroup.Text>
                  <FaBus />
                </InputGroup.Text>
                <FormControl
                  type="text"
                  placeholder="Source"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col md={3}>
              <InputGroup>
                <InputGroup.Text>
                  <FaMapPin />
                </InputGroup.Text>
                <FormControl
                  type="text"
                  placeholder="Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col md={3}>
              <InputGroup>
                <InputGroup.Text>
                  <FaCalendarAlt />
                </InputGroup.Text>
                <FormControl
                  type="date"
                  placeholder="dd/mm/yy"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col md={3}>
              <Button variant="danger" className="w-100">
                SEARCH
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bus-details">
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sort by:</th>
                <th>Departure</th>
                <th>Duration</th>
                <th>Arrival</th>
                <th>Rating</th>
                <th>Fare</th>
                <th>Seats Available</th>
              </tr>
            </thead>
            <tbody>
              {busData.map((bus, index) => (
                <tr key={index}>
                  <td>
                    <h2>{bus.busName}</h2>
                  </td>
                  <td>
                    <h2>{bus.departureTime}</h2>
                    <p>{bus.source}</p>
                  </td>
                  <td>
                    <p>06h 00m</p>
                  </td>
                  <td>
                    <h2>{bus.arrivalTime}</h2>
                    <p>{bus.destination}</p>
                  </td>
                  <td>4.3</td>
                  <td>
                    Starts from INR <h2>{bus.fare}</h2>
                  </td>
                  <td>
                    <p>{bus.seatsAvailable} Seats Available</p>
                    <Button
                      variant="danger"
                      onClick={() => view(bus)}
                      className="mt-2 "
                    >
                      <a href="seatreservation " className="text-white  ">View Seats</a>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};

export default BusType;
