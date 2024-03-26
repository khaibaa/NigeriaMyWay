// Import the necessary modules from the 'react' package
import React from 'react'
// Import the 'ReactDOM' module from the 'react-dom/client' package
import ReactDOM from 'react-dom/client'
// Import the main 'App' component from the './App' file
import App from './App'
// Import the CSS styles from the './index.css' file
import './index.css'

// Use the 'createRoot' method from 'ReactDOM' to create a root for rendering the app
// Pass the root element with the id 'root' to 'createRoot'
// Render the 'App' component inside 'React.StrictMode' for additional checks and warnings
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)