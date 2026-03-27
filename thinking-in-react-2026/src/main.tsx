import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.tsx'
// import DefaultApp from './DefaultApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <DefaultApp /> */}
    <App />
  </StrictMode>,
)
