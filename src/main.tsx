import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthenticationProvider } from './provider/state-management.tsx';
import axios from "axios";
import ReactQueryProvider from './provider/react-query.tsx';
import { NodeProvider } from './nodesProvider/node-state-management.tsx';
axios.defaults.baseURL = "http://localhost:3000/api/v1/";
axios.defaults.withCredentials = true;


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <GoogleOAuthProvider clientId="131355741189-kqq80n9rg196bqhh4aq1k23qtei3reni.apps.googleusercontent.com">
      <ReactQueryProvider>
    <AuthenticationProvider>
      <NodeProvider>
    <App />
      </NodeProvider>
    </AuthenticationProvider>
    </ReactQueryProvider>
    </GoogleOAuthProvider>
  // </StrictMode>
  ,
)
