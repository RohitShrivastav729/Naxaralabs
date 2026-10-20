import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import "./styles/global.css"

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

const rootElement = document.getElementById('root')

if (
  rootElement.hasChildNodes() &&
  rootElement.dataset.prerenderedPath === window.location.pathname
) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
