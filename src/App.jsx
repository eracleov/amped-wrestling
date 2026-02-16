import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Schedule from './pages/Schedule';
import Athletes from './pages/Athletes';
import Results from './pages/Results';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Register from './pages/Register';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="programs" element={<Programs />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="athletes" element={<Athletes />} />
        <Route path="results" element={<Results />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}
