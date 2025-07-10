import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyFinanceLanding from './MyFinanceLanding';
import Dashboard from './Dashboard'; // your other page

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



