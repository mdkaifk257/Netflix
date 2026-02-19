import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { missingKeys } from './firebase.ts'
import ConfigError from './components/ConfigError.tsx'

import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root')!);

if (missingKeys.length > 0) {
  root.render(
    <StrictMode>
      <ConfigError missingKeys={missingKeys} />
    </StrictMode>
  );
} else {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
}
