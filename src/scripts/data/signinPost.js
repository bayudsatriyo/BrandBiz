import CONFIG from '../globals/config';

const showResponseMessage = (message = 'Check your internet connection') => {
  // eslint-disable-next-line no-alert
  alert(message);
};

class signInPost {
  static async post(signin) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': CONFIG.token,
        },
        body: JSON.stringify(signin),
      };
      const response = await fetch(CONFIG.signin, options);
      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson
    } catch (error) {
      showResponseMessage(error);
      return null;
    }
  }
}

export default signInPost;
