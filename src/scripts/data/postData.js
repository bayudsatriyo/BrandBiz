import CONFIG from '../globals/config';

const showResponseMessage = (message = 'Check your internet connection') => {
  // eslint-disable-next-line no-alert
  alert(message);
};

class DBPost {
  static async post(feedback) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': CONFIG.token,
        },
        body: JSON.stringify(feedback),
      };
      const response = await fetch(CONFIG.feedbackUrl, options);
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      showResponseMessage(error);
    }
  }
}

export default DBPost;
