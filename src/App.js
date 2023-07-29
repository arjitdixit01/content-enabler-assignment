import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Introduction from './pages/Introduction';
import Who from './pages/Who';
import What from './pages/What';
import How from './pages/How';
import TrainingSummary from './pages/TrainingSummary';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Navbar />
        <Routes>
          {/* Set the default route to Introduction */}
          <Route path="/" element={<Introduction />} index />
          <Route path="/Introduction" element={<Introduction />} index />
          <Route path="/Who" element={<Who />} />
          <Route path="/What" element={<What />} />
          <Route path="/How" element={<How />} />
          <Route path="/TrainingSummary" element={<TrainingSummary />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
