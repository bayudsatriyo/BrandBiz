import 'regenerator-runtime';
import '../styles/styles_modul.css';
import '../styles/styles_responsive.css';

import App from './views/app';

console.log('hallo');

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
