import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Hotjar from "./components/Hotjar";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hotjar />
    <App />
  </React.StrictMode>,
)
