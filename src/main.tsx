import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import RoutesComponent from './routes/routes'
import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoutesComponent />
  </React.StrictMode>,
)
