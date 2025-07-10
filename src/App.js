import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyFinanceLanding from './MyFinanceLanding';
import Dashboard from './Dashboard'; // ✅ this is your other page

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
<Route path="/dashboard" element={<Dashboard />} />



