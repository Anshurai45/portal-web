import { StrictMode } from 'react'
import React from 'react'
import reactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';

import './index.css'
import App from './App.jsx'
import{ BrowserRouter } from 'react-router-dom'

import { AppContextProvider } from './context/AppContext'; // ✅ named import
import { ClerkProvider } from '@clerk/clerk-react'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClerkProvider  publishableKey={PUBLISHABLE_KEY}  afterSignOutUrl='/' >
  <BrowserRouter>
  <React.StrictMode>
  <AppContextProvider>
    <App />
     </AppContextProvider>
    </React.StrictMode>
  </BrowserRouter>
  </ClerkProvider>,
)




