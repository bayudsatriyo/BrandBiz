import CONFIG from '../globals/config';

const showResponseMessage = (message = 'Check your internet connection') => {
  // eslint-disable-next-line no-alert
  alert(message);
};

class LoginPost {
  static async post(login) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': CONFIG.token,
        },
        body: JSON.stringify(login),
      };
      const response = await fetch(CONFIG.login, options);
      const responseJson = await response.json();
      console.log(responseJson);
      if(responseJson.message === 'Missing var entry: users_1'){
        return null;
      }else{
        return (responseJson);
      }
    } catch (error) {
      showResponseMessage(error);
      return null;
    }
  }
}

export default LoginPost;
