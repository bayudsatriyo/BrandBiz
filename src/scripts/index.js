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

const logout = document.querySelector('.btn-logout');
logout.addEventListener('click', (event) => {
  event.preventDefault();
  const navdrawer = document.querySelector('#hamburgerButton');
  localStorage.removeItem("user");
  console.log(app)
  navdrawer.click();
  location.assign("#/");
})

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
