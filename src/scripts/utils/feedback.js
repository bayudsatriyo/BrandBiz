import DBPost from '../data/postData';

const feedbackInitiator = (feedbackContainer) => {
  feedbackContainer.addEventListener('submit', (event) => {
    // menghentikan aksi bawaan form
    event.preventDefault();

    // melakukan aksi lainnya setelah form disubmit
    const valueNama = document.querySelector('#name');
    const valueEmail = document.querySelector('#email');
    const valueJabatan = document.querySelector('#jabatan');
    const valueUsaha = document.querySelector('#usaha');
    const valuefeedback = document.querySelector('#feedback');
    const feedbackPost = {
      nama: valueNama.value,
      email: valueEmail.value,
      jabatan: valueJabatan.value,
      jenis: valueUsaha.value,
      feedback: valuefeedback.value,
    };
    console.log(JSON.stringify(feedbackPost));

    DBPost.post(feedbackPost);
    feedbackContainer.reset();
  });
};

export default feedbackInitiator;
