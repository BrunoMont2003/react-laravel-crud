import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/globals.scss'
const root = document.getElementById('root')
const container = createRoot(root)
container.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
