import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogInPage from "./components/auth/LogInPage";
import SignUpPage from "./components/auth/SignUpPage";
import ForgotPassword from "./components/auth/ForgotPassword";
import HeaderBar from "./components/layout/HeaderBar";
import Write from "./components/Home/Write";
import Sent from "./components/Home/Sent";
import Inbox from "./components/Home/Inbox";
function App() {
  return (
    <Router>
      <HeaderBar />
      <Routes>
        <Route path="/home/inbox" element={<Inbox />} exact />
        <Route path="/home/write" element={<Write />} exact />
        <Route path="/home/sent" element={<Sent />} exact />
        <Route path="/" element={<LogInPage />} exact />
        <Route path="/login" element={<LogInPage />} exact />
        <Route path="/signup" element={<SignUpPage />} exact />
        <Route path="/forgot-password" element={<ForgotPassword />} exact />
      </Routes>
    </Router>
  );
}

export default App;
