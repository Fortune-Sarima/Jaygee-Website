import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import ByDesign from './pages/ByDesign';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/by-design" element={<ByDesign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;