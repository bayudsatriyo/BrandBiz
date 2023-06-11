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
          'X-Auth-Token': 'eyJhbGciOiJSUzI1NiJ9.eyJ4YW5vIjp7ImRibyI6Im1hc3Rlcjp1c2VyIiwiaWQiOjQwNzgwLCJhY2Nlc3NfdG9rZW4iOnsia2V5aWQiOiJjOTkwYzk2MS1mN2RjLTQ1NGMtODYzMy0zZWZjMmMzYzMxNTUiLCJzY29wZSI6eyJ3b3Jrc3BhY2U6Y29udGVudCI6MTUsIndvcmtzcGFjZTpkYXRhYmFzZSI6MTUsIndvcmtzcGFjZTpmaWxlIjoxNSwid29ya3NwYWNlOnJlcXVlc3RoaXN0b3J5IjoxNX19fSwiaWF0IjoxNjg2MzI5MzY5LCJuYmYiOjE2ODYzMjkzNjksImF1ZCI6Inhhbm86bWV0YSJ9.c0Qmn3GrP7mkTcr9zv2dTdocYnOnDLmKuiyBU8iT7ohzaBTj5FPMvQJs3hKDmX4T9YMFBGg7DfFw-yLKFQDjbT6eoRAsA2nxEIuf-BN-URBfmL38dLpnDUT1sRzOlZW5Krk67x9MrF5rNl1Upccb7RT6FzBM1TLkWmQenOCUwvXWndfe10K_f5pRBkO1L2s-9NHulYnbj_nxoeQAibMVYnMEaE8qsyw6JRCtv-UzZlIdkNDdo6YGMNRsIWwfp8IRILoKuNYi-nhT283a3DLIuhpEkxgOLhWZC7C1zB8jRlqHxn2GlLyJT5M32fqvzy3Ii1qQX0gyjNJnTAKbR1JHjKvayE-A717FrP1XdQBoX5UC6ZgloQQmBAKJBDxkXxdUCkBrbL63mPddVW6y8-Ilt4j4fUBZlHXCDM9gUM1TK5XWIp5CqrYaPcTX-_5Z_azIiDMGHfrAmAOQXBZjNpcVf2f_kbGyug1YhdJfV2NgL1JO1GpG5smIfDcmmjLzQ4LGzxgmjvzsyqCESogMAV-XezHtsdVQSQ-QLswsuiYI0tgVbWhL4KryaxlmE0LtQIruEV4FdqoIOx8TayZ-xhMZ4fxdCi9FJlXuu2oOt5LpVOaMyAcZr3hDGNzfHLHBb4QyYVTT_iAZ1-oQWioQoROisAa3022rLsmav0MsNnx1X6U',
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
