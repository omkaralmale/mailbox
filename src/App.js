import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogInPage from "./components/auth/LogInPage";
import SignUpPage from "./components/auth/SignUpPage";
import ForgotPassword from "./components/auth/ForgotPassword";
import HeaderBar from "./components/layout/HeaderBar";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
