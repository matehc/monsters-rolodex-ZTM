import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// from React 18, we import createRoot from 'react-dom/client'

// we can capture the root id from html and store it in a container.
const constainer = document.getElementById('root');

// pass captured root element into createRoot that will become our new root.
const root = createRoot(constainer);

// call the render method on the root that has been created
root.render (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

