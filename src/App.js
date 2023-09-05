import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => {setCurrentPage(page);
  };

  return (
    <div className="App">
      <Navbar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <PortfolioContainer currentPage={currentPage} />
      <Footer />
    </div>
  )
}


export default App;
