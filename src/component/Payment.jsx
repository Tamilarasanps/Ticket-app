import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    num: "",
    date: "",
    cvvNo: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    let isValid = true;

    // Form validation
    if (!cardName) {
      validationErrors.name = "*Please Enter Card Holder's Name";
      isValid = false;
    }

    if (!cardNumber) {
      validationErrors.num = "*Please Enter Account Number";
      isValid = false;
    }

    if (!expDate) {
      validationErrors.date = "*Expiry Date is required";
      isValid = false;
    }

    if (!cvv) {
      validationErrors.cvvNo = "*Please Enter CVV";
      isValid = false;
    }

    setErrors(validationErrors);

    if (isValid) {
      alert("Payment Successfully");
      // setTimeout(() => {
      navigate("/ticket"); // Redirect after 1 sec
      // }, 1000);
    }
  };

  return (
    <div className="container py-5">
      {/* Payment Details Form (Card Payment) */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">
                Card Payment Details
              </h3>
              <form onSubmit={handleSubmit}>
                {/* Card Holder Name */}
                <div className="mb-3">
                  <label htmlFor="cardName" className="form-label">
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    className="form-control"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="Name"
                  />
                  {errors.name && (
                    <div className="text-danger">{errors.name}</div>
                  )}
                </div>

                {/* Card Number */}
                <div className="mb-3">
                  <label htmlFor="cardNum" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNum"
                    className="form-control"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="xxxx xxxx xxxx xxxx"
                  />
                  {errors.num && (
                    <div className="text-danger">{errors.num}</div>
                  )}
                </div>

                {/* Expiry Date & CVV */}
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="expDate" className="form-label">
                      Exp Date
                    </label>
                    <input
                      type="text"
                      id="expDate"
                      className="form-control"
                      value={expDate}
                      onChange={(e) => setExpDate(e.target.value)}
                      placeholder="MM/YY"
                    />
                    {errors.date && (
                      <div className="text-danger">{errors.date}</div>
                    )}
                  </div>
                  <div className="col">
                    <label htmlFor="cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      className="form-control"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="XXX"
                    />
                    {errors.cvvNo && (
                      <div className="text-danger">{errors.cvvNo}</div>
                    )}
                  </div>
                </div>

                {/* Amount */}
                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">
                    Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                  />
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-danger">
                    Proceed to Pay
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
