import CONFIG from "../globals/config";

class TestimonyDbSource {
    static async testimonyUsers() {
      const response = await fetch(CONFIG.TESTIMONY);
      const responseJson = await response.json();
      return responseJson;
    }
  }
  
  export default TestimonyDbSource;