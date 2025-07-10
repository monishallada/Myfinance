import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyFinanceLanding from './MyFinanceLanding';
import Dashboard from './Dashboard'; // <-- this links to your Dashboard.jsx

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyFinanceLanding />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
