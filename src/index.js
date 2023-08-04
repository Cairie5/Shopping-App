import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from "./Components/App";
import reportWebVitals from './reportWebVitals';

// Use createRoot to render the App component
const root = document.getElementById("root");
const rootContainer = createRoot(root);

rootContainer.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
