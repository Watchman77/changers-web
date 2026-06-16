import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { applyPremiumFacelift } from './premium-facelift'
import './styles.css'
import './premium-facelift.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

applyPremiumFacelift()
