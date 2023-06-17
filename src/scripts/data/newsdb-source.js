import API_ENDPOINT from '../globals/api-endpoint';

class NewsDbSource {
  static async news() {
    const response = await fetch(API_ENDPOINT.NEWS);
    const responseJson = await response.json();
    return responseJson.articles;
  }
}

export default NewsDbSource;
