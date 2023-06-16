import API_ENDPOINT from '../globals/api-endpoint';

class TestimonyDbSource {
  static async testimonyUsers() {
    const response = await fetch(API_ENDPOINT.TESTIMONY);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default TestimonyDbSource;
