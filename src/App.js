import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import EmailList from "./EmailList";
import Compose from "./Compose";
import { useSelector } from "react-redux";
import MailDetails from "./MailDetails";
import LogInPage from "./components/auth/LogInPage";
import SignUpPage from "./components/auth/SignUpPage";
import SentEmailList from "./SentEmailList";

const App = () => {
  const send = useSelector((state) => state.mail.sendMessageIsOpen);
  const l = useSelector((state) => state.auth.isLogin);

  return (
    <div>
      <Router>
        {l && <Header />}
        <div className="app_body">
          {l && <SideBar />}

          <Routes>
            <Route path="/" element={<LogInPage />} exact />
            <Route path="/signup" element={<SignUpPage />} exact />
            <Route path="/login" element={<LogInPage />} exact />
            {l && <Route path="/mail" element={<EmailList />} exact />}
            {l && <Route path="/sentmail" element={<SentEmailList />} exact />}
            {l && <Route path="/maildetails" element={<MailDetails exact />} />}
          </Routes>

          {send && <Compose />}
        </div>
      </Router>
    </div>
  );
};

export default App;
