import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TicketTransfer = () => {
  const [ticketNo, setTicketNo] = useState("");
  const [passengerDetails, setPassengerDetails] = useState({
    name: "",
    gender: "",
    age: "",
    relation: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const ticket = localStorage.getItem("ticketNumber");
    setTicketNo(ticket);

    const passengerName = localStorage.getItem("name");
    const passengerAge = localStorage.getItem("age");
    setPassengerDetails((prevDetails) => ({
      ...prevDetails,
      name: passengerName,
      age: passengerAge,
    }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPassengerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleGenderChange = (e) => {
    setPassengerDetails((prevDetails) => ({
      ...prevDetails,
      gender: e.target.value,
    }));
  };

  const transferTicket = (e) => {
    e.preventDefault();

    const { name, age, relation, email, phone, gender } = passengerDetails;
    let valid = true;

    if (!name) {
      alert("Name is required");
      valid = false;
    } else if (!gender) {
      alert("Please select a gender");
      valid = false;
    } else if (!age) {
      alert("Age is required");
      valid = false;
    } else if (!relation) {
      alert("Relationship is required");
      valid = false;
    } else if (!email || !email.includes("@gmail.com")) {
      alert("Enter a valid Email ID");
      valid = false;
    } else if (!phone || phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      alert("Enter a valid 10-digit phone number");
      valid = false;
    }

    if (valid) {
      alert("Your ticket has been transferred successfully!");
      setTimeout(() => {
        window.location.href = "/ticket";
      }, 1000);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Ticket Transfer</h2>
      <form onSubmit={transferTicket}>
        <div className="card p-4">
          <h3 className="text-warning">
            <i
              className="fa-solid fa-ticket"
              style={{ color: "rgb(199, 151, 21)" }}
            ></i>{" "}
            Ticket Details
          </h3>
          <div className="mb-3">
            <label className="form-label">
              Ticket Number <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={ticketNo}
              readOnly
            />
          </div>

          <h3 className="text-primary">
            <i
              className="fa regular fa-circle-user"
              style={{ color: "blue" }}
            ></i>{" "}
            Passenger Information
          </h3>
          <div className="mb-3">
            <label className="form-label">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={passengerDetails.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={passengerDetails.gender === "Male"}
                onChange={handleGenderChange}
              />
              <label>Male</label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={passengerDetails.gender === "Female"}
                onChange={handleGenderChange}
              />
              <label>Female</label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Age <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              name="age"
              className="form-control"
              placeholder="Age"
              value={passengerDetails.age}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Relationship <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="relation"
              className="form-control"
              placeholder="Relationship"
              value={passengerDetails.relation}
              onChange={handleInputChange}
            />
          </div>

          <h3 className="text-warning">
            <i
              className="fa-solid fa-envelope"
              style={{ color: "rgb(255, 208, 0)" }}
            ></i>{" "}
            Contact Details
          </h3>
          <div className="mb-3">
            <label className="form-label">Email ID</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email ID"
              value={passengerDetails.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Phone <span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Phone"
              value={passengerDetails.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-danger w-50">
              TRANSFER TICKET
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TicketTransfer;
