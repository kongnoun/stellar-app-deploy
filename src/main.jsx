import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './assets/components/navbar'
import LandingPage from './assets/components/Landing-page'
import './index.css'

createRoot(document.getElementById('Navbar')).render(
  <StrictMode>
    <Navbar/>
    <LandingPage />
  </StrictMode>,
)