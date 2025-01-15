import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Navbar from './Components/Navbar'; 

import Main1 from './Pages/MainComponent';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main1 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
