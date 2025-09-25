import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Handle GitHub Pages SPA routing
const handleGitHubPagesRouting = () => {
  const path = window.location.search.substring(1);
  if (path && path.startsWith('/')) {
    // Remove the leading slash and redirect
    const cleanPath = path.substring(1);
    if (cleanPath) {
      window.history.replaceState(null, '', `/${cleanPath}`);
    }
  }
};

// Call the routing handler
handleGitHubPagesRouting();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
