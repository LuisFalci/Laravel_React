import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import JournalList from './JournalList/Index';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/journal" element={<JournalList />}></Route>    
      </Routes>
    </Router>
  )
}

export default App;
