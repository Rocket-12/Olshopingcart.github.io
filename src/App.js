// import logo from './logo.svg';
import './App.css';
import About from './Component/About';
import Footer from './Component/Footer';
import Mobile from './Component/Mobile';
import Navbar from './Component/Navbar';
import Section from './Component/Section';
import Slider from './Component/Slider';
import Watch from './Component/Watch';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar/>

      <Routes>

        <Route path="/slider" element={<Slider />} />

        <Route path='/about' element={<About />} />

        <Route path='/section' element={<Section />} />

        <Route path='/watch_product' element={<Watch />} />

        <Route path='/mobile' element={<Mobile />} />

        <Route path='/footer' element={<Footer />} />

      </Routes>
    </>

  );
}

export default App;
