import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import ProjectPage from "./Pages/Projects";
import ServicePage from "./Pages/Services";
import ContactPage from "./Pages/Contact";
import CareerPage from "./Pages/Career";

import "./App.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<HomePage />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/tcp-international/about" element={<AboutPage />} />
          <Route path="/tcp-international/projects" element={<ProjectPage />} />
          <Route path="/tcp-international/services" element={<ServicePage />} />
          <Route path="/tcp-international/contact-us" element={<ContactPage />} />
          <Route path="/tcp-international/career" element={<CareerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


