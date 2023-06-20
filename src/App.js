import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './components/About';
import Banner from './components/Banner';
import ContactForm from './components/Contact';
import Education from './components/Edu';
import Features from './components/Features';
import MoveCalculator from './components/MoveCalculator';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/projects" element={<>
            <Banner />
            <MoveCalculator />
            <ContactForm />
          </>} />
          <Route path="/" element={<>
            <Banner />
            <AboutMe />
            <Features />
            <Education />
            <ContactForm />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;