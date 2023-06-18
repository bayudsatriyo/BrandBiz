import CONFIG from "../globals/config";

class NewsDbSource {
    static async news() {
      const response = await fetch(CONFIG.NEWS);
      const responseJson = await response.json();
      return responseJson.articles;
    }
  }
  
  export default NewsDbSource;