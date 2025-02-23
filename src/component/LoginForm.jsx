import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import amazon from "../image/amazon.jpg";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.username) newErrors.username = "*Name is required";
    if (!formData.password) newErrors.password = "*Password is required";
    if (!formData.email.includes("@gmail.com"))
      newErrors.email = "*Enter a valid Email Id";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Login Successfully");
      setTimeout(() => {
        navigate("/main"); // Navigate to the frontpage route
      }, 1000);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <img src={amazon} alt="amz" />
      <div
        className="card p-4 shadow-lg"
        style={{ width: "30rem", background: "lightgrey" }}
      >
        <h2 className="text-center text-danger">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 position-relative">
            <FaUser className="position-absolute mt-3 ms-2 text-secondary" />
            <input
              type="text"
              name="username"
              className="form-control ps-4"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <small className="text-danger">{errors.username}</small>
          </div>

          <div className="mb-3 position-relative">
            <FaLock className="position-absolute mt-3 ms-2 text-secondary" />
            <input
              type="password"
              name="password"
              className="form-control ps-4"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <small className="text-danger">{errors.password}</small>
          </div>

          <div className="mb-3 position-relative">
            <FaEnvelope className="position-absolute mt-3 ms-2 text-secondary" />
            <input
              type="email"
              name="email"
              className="form-control ps-4"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
            <small className="text-danger">{errors.email}</small>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-danger w-50"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
