import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PolicyPrivacy from "./pages/PolicyPrivacy";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/policy-privacy" element={<PolicyPrivacy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
