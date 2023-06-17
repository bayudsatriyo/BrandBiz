import 'regenerator-runtime';
import '../styles/styles_modul.css';
import '../styles/styles_responsive.css';
import '../styles/styles_home.css';

import App from './views/app';

console.log('hallo');

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
  drawerhome: document.querySelector('#navigationDrawerHome'),
  buttonhome: document.querySelector('#hamburgerButtonHome'),
});

const logout = document.querySelector('.btn-logout');
logout.addEventListener('click', (event) => {
  event.preventDefault();
  const navdrawer = document.querySelector('#hamburgerButton');
  localStorage.setItem('user', 'login');
  console.log(app)
  navdrawer.click();
  const navigation = document.querySelectorAll('#navigationDrawerHome a');
  navigation.forEach((nav) => {
    nav.removeAttribute('hidden');
  });
  location.assign("#/login");
})

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
