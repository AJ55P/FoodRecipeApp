import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './Components/App'

const root = ReactDOM.createRoot(document.querySelector('#root'));
const appComponent = <App/>;

root.render(appComponent);

