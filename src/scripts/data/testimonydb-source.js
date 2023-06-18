import CONFIG from "../globals/config";

class TestimonyDbSource {
    static async testimonyUsers() {
      try{
        const response = await fetch(CONFIG.TESTIMONY);
        const responseJson = await response.json();
        return responseJson;
      }catch(responseJson){
        alert(responseJson.message)
      }
    }
  }
  
  export default TestimonyDbSource;