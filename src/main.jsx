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
        containerStyle={{ top: 24, right: 24 }}
        toastOptions={{
          duration: 4000,
          style: {
            background:        'linear-gradient(135deg, rgba(19,23,31,0.95) 0%, rgba(13,16,23,0.9) 100%)',
            color:             '#f1f2f4',
            border:            '1px solid rgba(255,255,255,0.08)',
            borderRadius:      '20px',
            padding:           '14px 18px',
            backdropFilter:    'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow:         '0 0 30px rgba(0,0,0,0.4), 0 20px 40px rgba(0,0,0,0.3)',
            fontSize:          '14px',
            fontWeight:        '500',
            maxWidth:          '420px',
          },
          success: {
            iconTheme: { primary: '#000000', secondary: '#08090d' },
            style: { border: '1px solid rgba(0,0,0,0.25)' },
          },
          error: {
            iconTheme: { primary: '#f87171', secondary: '#08090d' },
            style: { border: '1px solid rgba(248,113,113,0.25)' },
          },
          loading: {
            iconTheme: { primary: '#000000', secondary: '#08090d' },
            style: { border: '1px solid rgba(0,0,0,0.2)' },
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);
