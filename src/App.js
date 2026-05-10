import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';

// --- Page Components ---

const Home = () => {
  return (
    <div>
      <h2 style={{color: '#333'}}>Simple Multi-Page React Website</h2>
      <p style={{ color: '#666' }}>
        Jayvee C. Garcia
      </p>
      <p style={{color:"#666"}}>BSIT-2A</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2 style={{ color: '#333' }}>About Page</h2>
      <p style={{ color: '#666' }}>
        This application was built to demonstrate routing without page reloads.
      </p>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h2 style={{ color: '#333' }}>Contact Page</h2>
      <p style={{ color: '#666' }}>
        Contact me @09999999999
      </p>
      <p style={{color: '#666'}}>Email:Jayveegarcia2A@gmail.com
      </p>
    </div>
  );
};

// --- Navigation Component ---

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: '#2c3e50',
        padding: '15px 0',
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </nav>
  );
};

// --- Main App Component & Routing ---

function App() {
  return (
    
    <Router>
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f4f7f6',
          minHeight: '100vh',
          margin: 0,
          padding: 0,
        }}
      >
        <Navbar />

        <div
          style={{
            backgroundColor: 'white',
            maxWidth: '600px',
            margin: '40px auto',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// --- Reusable Styles ---

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
};

export default App;
