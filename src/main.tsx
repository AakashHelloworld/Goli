import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AppProvider } from './provider/state-management.tsx';
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/v1/";
axios.defaults.withCredentials = true;


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="131355741189-kqq80n9rg196bqhh4aq1k23qtei3reni.apps.googleusercontent.com">
    <AppProvider>
    <App />
    </AppProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
