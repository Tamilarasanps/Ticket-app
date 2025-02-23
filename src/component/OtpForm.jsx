import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [message, setMessage] = useState("");
  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [timerActive, setTimerActive] = useState(false);

  const generateOTP = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000);
    setGeneratedOtp(newOtp);
    setMessage(`Generated OTP: ${newOtp}`);
    setOtp("");
    setSecondsRemaining(10);
    setTimerActive(true);

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimerActive(false);
          setMessage("OTP Expired. Please generate a new OTP.");
          setGeneratedOtp(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const verifyOTP = () => {
    if (!otp) {
      alert("Please enter OTP.");
      return;
    }
    if (parseInt(otp) === generatedOtp && secondsRemaining > 0) {
      setMessage("OTP Verified Successfully!");
      setGeneratedOtp(null);
      setTimerActive(false);
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="container mt-5 p-4 border rounded bg-light text-center">
      <h2 className="text-success">Login Form</h2>
      <Button onClick={generateOTP} disabled={timerActive} className="mt-3">
        Generate OTP
      </Button>
      {message && (
        <Alert variant={generatedOtp ? "info" : "danger"} className="mt-3">
          {message}
        </Alert>
      )}
      {generatedOtp && (
        <Form className="mt-3">
          <Form.Control
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <Button onClick={verifyOTP} className="mt-2">
            Verify OTP
          </Button>
          {timerActive && (
            <p className="mt-2">Time Remaining: {secondsRemaining}s</p>
          )}
        </Form>
      )}
    </div>
  );
};

export default OTPVerification;
