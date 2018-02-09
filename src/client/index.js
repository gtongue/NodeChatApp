import React from 'react';
import {render} from 'react-dom';
import App from './components/App.jsx';

import styles from './scss/application.scss';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  render(<App />, root);
});