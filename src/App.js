import Promote from './Promote'; // ✅ add this with your other imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyFinanceLanding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/promote" element={<Promote />} /> {/* ✅ new route */}
      </Routes>
    </Router>
  );
}

