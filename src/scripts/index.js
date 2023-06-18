import 'regenerator-runtime';
import '../styles/styles_modul.css';
import '../styles/styles_responsive.css';
import '../styles/styles_home.css';
import '../styles/learning.css';
import '../styles/news.css';

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
const TombolLogin = document.getElementById('signInHome');
const home = document.getElementById('home');
const backButton = document.getElementById('back');
const logo = document.querySelector('.nav-title img');
const news = document.getElementById('news');

news.addEventListener('click', (event) => {
  event.preventDefault();
  localStorage.setItem('user', 'news');
  TombolLogin.removeAttribute('hidden');
  location.assign("#/news");
})

backButton.addEventListener('click', (event) => {
  event.preventDefault
  logo.removeAttribute('hidden');
  backButton.setAttribute('hidden', '');
  TombolLogin.removeAttribute('hidden');
  location.assign('#/learning')
})
home.addEventListener('click', (event) => {
  event.preventDefault();
  localStorage.removeItem('user');
  TombolLogin.removeAttribute('hidden');
  location.assign("#/");
})

logout.addEventListener('click', (event) => {
  event.preventDefault();
  const navdrawer = document.querySelector('#hamburgerButton');
  localStorage.setItem('user', 'login');
  console.log(app)
  navdrawer.click();
  logo.removeAttribute('hidden');
  backButton.setAttribute('hidden', '');
  const navigation = document.querySelectorAll('#navigationDrawerHome .listnav');
  navigation.forEach((nav) => {
    console.log(nav);
    nav.removeAttribute('hidden');
  });
  TombolLogin.innerText = 'Masuk';
  TombolLogin.setAttribute('hidden', '');
  location.assign("#/login");
})

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
