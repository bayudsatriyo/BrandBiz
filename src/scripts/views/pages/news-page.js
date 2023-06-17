import NewsDbSource from '../../data/newsdb-source';
import { createNewsItemTemplate } from '../templates/template-creator';

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
    const headline = await NewsDbSource.news();
    console.log(headline);
    const newsContainer = document.querySelector('#newsContainer');

    headline.forEach((news) => {
      newsContainer.innerHTML += createNewsItemTemplate(news);
    });
  },
};

export default News;
