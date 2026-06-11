if (typeof window !== 'undefined' && window.trustedTypes && !window.trustedTypes.defaultPolicy) {
    window.trustedTypes.createPolicy('default', {
        createScript: (string) => string,
        createScriptURL: (string) => string,
        createHTML: (string) => string,
    });
}

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
