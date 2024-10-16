import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './assets/components/Navbar.jsx';
import LandingPage from './assets/components/Landing-page.jsx';
import './index.css';

createRoot(document.getElementById('Navbar')).render(
  <>
    <Navbar />
    <LandingPage />
  </>
);
