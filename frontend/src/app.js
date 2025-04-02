import React, { useState } from "react";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Header from "./header";
import Main from "./main";
import Contact from './components/Contact';
import ContactInfo from './components/ContactInfo';

function App() {
  const [currentPage, setCurrentPage] = useState("about");
  return (
   
    <div>
         <Router>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Main currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<Main currentPage={currentPage} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactinfo" element={<ContactInfo />} />
      </Routes>
      </Router>
      </div>
   
   
   
  );
}

export default App;