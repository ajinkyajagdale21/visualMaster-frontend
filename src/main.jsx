import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter, Route } from 'react-router-dom';
const apiKey = import.meta.env.VITE_AUTH_API_KEY;
const apiUrl = import.meta.env.VITE_AUTH_API_URL;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain={apiUrl}
    clientId={apiKey}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </Auth0Provider>
  </React.StrictMode>,
)
