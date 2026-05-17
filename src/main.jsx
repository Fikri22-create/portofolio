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
            background: 'rgba(15, 23, 42, 0.92)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,.08)',
            borderRadius: '22px',
            padding: '16px 18px',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            boxShadow:
              '0 10px 40px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.04)',
            fontSize: '14px',
            fontWeight: '500',
            maxWidth: '420px',
          },

          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#ffffff',
            },

            style: {
              border:
                '1px solid rgba(34,197,94,.25)',
            },
          },

          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },

            style: {
              border:
                '1px solid rgba(239,68,68,.25)',
            },
          },

          loading: {
            iconTheme: {
              primary: '#22d3ee',
              secondary: '#ffffff',
            },

            style: {
              border:
                '1px solid rgba(34,211,238,.25)',
            },
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);