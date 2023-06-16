import CONFIG from '../globals/config';

const showResponseMessage = (message = 'Check your internet connection') => {
  // eslint-disable-next-line no-alert
  alert(message);
};

class kuisPost {
  static async post(userid, isikuis) {
    try {
      const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': CONFIG.token,
          },
        body: JSON.stringify(isikuis)
      };
      console.log(userid);
      console.log(isikuis);
      const response = await fetch(CONFIG.nilaiKuis + userid.toString(), options);
      const responseJson = await response.json();
      console.log(responseJson);
      console.log('kuis berhasil dipost');
    } catch (error) {
      showResponseMessage(error);
    }
  }
}

export default kuisPost;
