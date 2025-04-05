import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import * as bootstrap from 'bootstrap'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TaskProvider } from './context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TaskProvider>
        <App />
      </TaskProvider>
    </BrowserRouter>
  </StrictMode>,
)
