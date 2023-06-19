import NewsDbSource from '../../data/newsdb-source';
import { createNewsItemTemplate } from '../templates/creator_template';

const News = {
  async render() {
    return `
    <section class="news">
    <h1>News Today</h1>
    <div class="news-container" id="newsContainer">
    </div>
            `;
  },

  async afterRender() {
    const hamburger = document.getElementById('hamburgerButton');
    const login = document.getElementById('signInHome');
    hamburger.setAttribute('hidden', '');
    login.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.setItem('user', 'login');
        login.setAttribute('hidden', '');
        location.assign("#/login");
      });
    const headline = await NewsDbSource.news();
    console.log(headline);
    const newsContainer = document.querySelector('#newsContainer');

    headline.forEach((news) => {
      newsContainer.innerHTML += createNewsItemTemplate(news);
    });
  },
};

export default News;
