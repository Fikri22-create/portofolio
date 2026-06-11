import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: 24,
          right: 24,
        }}
        toastOptions={{
          duration: 4000,

          style: {
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)',
            color: '#ffffff',
            border: '1px solid rgba(167,139,250,0.25)',
            borderRadius: '22px',
            padding: '16px 18px',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow:
              '0 0 30px rgba(167,139,250,0.15), 0 20px 40px rgba(0,0,0,0.4)',
            fontSize: '14px',
            fontWeight: '500',
            maxWidth: '420px',
          },

          success: {
            iconTheme: {
              primary: '#4ade80',
              secondary: '#ffffff',
            },
            style: {
              border: '1px solid rgba(74,222,128,.25)',
            },
          },

          error: {
            iconTheme: {
              primary: '#f87171',
              secondary: '#ffffff',
            },
            style: {
              border: '1px solid rgba(248,113,113,.25)',
            },
          },

          loading: {
            iconTheme: {
              primary: '#a78bfa',
              secondary: '#ffffff',
            },
            style: {
              border: '1px solid rgba(167,139,250,.30)',
            },
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);