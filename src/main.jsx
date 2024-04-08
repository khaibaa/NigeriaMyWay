// Import the necessary modules from the 'react' package
import React from 'react'
// Import the 'ReactDOM' module from the 'react-dom/client' package
import ReactDOM from 'react-dom/client'
// Import the main 'App' component from the './App' file
import App from './App'
// Import the CSS styles from the './index.css' file
import './index.css'
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_fr from "./translations/fr/common.json";
import common_en from "./translations/en/common.json";
import common_es from "./translations/es/common.json";



i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        fr: {
            common: common_fr
        },
        es: {
          common: common_es
        },
    },
});


// Use the 'createRoot' method from 'ReactDOM' to create a root for rendering the app
// Pass the root element with the id 'root' to 'createRoot'
// Render the 'App' component inside 'React.StrictMode' for additional checks and warnings
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
         <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
  </React.StrictMode>,
)