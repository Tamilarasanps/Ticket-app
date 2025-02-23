import "./App.css";
import LoginForm from "./component/LoginForm";
import OTPVerification from "./component/OtpForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BusTicketReservation from "./component/BusTicketReservation";
import BusType from "./component/BusType";
import Main from "./component/Main";
import Passanger from "./component/Passaner";
import PaymentForm from "./component/Payment";
import SeatReservation from "./component/SeatReservation";
import Ticket from "./component/Ticket";
import TicketTransfer from "./component/TicketTransfer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="otp" element={<OTPVerification />} />
          <Route path="reservation" element={<BusTicketReservation />} />
          <Route path="bustype" element={<BusType />} />
          <Route path="main" element={<Main />} />
          <Route path="passanger" element={<Passanger />} />
          <Route path="payment" element={<PaymentForm />} />
          <Route path="seatreservation" element={<SeatReservation />} />
          <Route path="ticket" element={<Ticket />} />
          <Route path="tickettransfer" element={<TicketTransfer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
