import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Ensure the root element exists before rendering
if (rootElement) {
  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error('Could not find root element');
}