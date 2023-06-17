import CONFIG from './config';

const API_ENDPOINT = {
  TESTIMONY: `${CONFIG.TESTIMONY_BASE_URL}/feedback`,
  NEWS: `${CONFIG.NEWS_BASE_URL}/top-headlines?country=us&${CONFIG.NEWS_API_KEY}`,
};

export default API_ENDPOINT;
