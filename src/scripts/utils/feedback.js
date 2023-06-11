import DBPost from '../data/postData';

const feedbackInitiator = (feedbackContainer) => {
  feedbackContainer.addEventListener('submit', (event) => {
    // menghentikan aksi bawaan form
    event.preventDefault();

    // melakukan aksi lainnya setelah form disubmit
    const valueNama = document.querySelector('#name');
    const valueEmail = document.querySelector('#email');
    const valuefeedback = document.querySelector('#feedback');
    const feedbackPost = {
      nama: valueNama.value,
      email: valueEmail.value,
      feedback: valuefeedback.value,
    };
    console.log(JSON.stringify(feedbackPost));

    DBPost.post(feedbackPost);
    feedbackContainer.reset();
  });
};

export default feedbackInitiator;
