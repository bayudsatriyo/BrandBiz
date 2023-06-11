import CONFIG from '../globals/config';

const showResponseMessage = (message = 'Check your internet connection') => {
  // eslint-disable-next-line no-alert
  alert(message);
};

class KuisDB {
  static async get() {
    try {
      const response = await fetch(CONFIG.kuisUrl);
      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      showResponseMessage(error);
    }
  }
}

export default KuisDB;
