import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './Errorboundaries';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ErrorBoundary>
    <App />
    </ErrorBoundary>
);
