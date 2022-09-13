import React from 'react';
import ReactDOM from 'react-dom';
// load PF base styles before main app
import "@patternfly/react-core/dist/styles/base.css";
import App from './App';

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
