import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Nav from './Nav'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Nav></Nav>
    </>
  </StrictMode>,
)
