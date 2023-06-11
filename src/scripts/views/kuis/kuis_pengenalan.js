import KuisDB from '../../data/kuisDB';
import createSoal from '../templates/form_kuis';

// const getanswer = (soal) => {
//   if (soal !== null) {
//     return Boolean(Number(soal.value));
//   }
//   return 'data tidak ditemukan';
// };

const KuisPengenalan = {
  async render() {
    return `
      <div class="container">
      <h1 class="judul">Kuis Pengenalan Branding</h1>
      <div class="kuis-container">
      <form id="form-kuis">
      <div id="soal-container">
      </div>
      <button type="submit">Kirim</button>
    </form>
      </div>
      </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const soalContainer = document.getElementById('soal-container');
    const kuis = await KuisDB.get();
    const { soal } = kuis[0];
    console.log(kuis);
    soal.forEach((perSoal, index) => {
      soalContainer.innerHTML += createSoal(perSoal, index);
      console.log(perSoal);
      console.log(index);
    });
    const buttonSubmit = document.getElementById('form-kuis');
    buttonSubmit.addEventListener('submit', (event) => {
      // menghentikan aksi bawaan form
      event.preventDefault();
      const datasoal = [];
      // melakukan aksi lainnya setelah form disubmit
      for (let i = 0; i < soal.length; i += 1) {
        datasoal[i] = document.querySelector(`input[name="soal${i}"]:checked`);
        if (datasoal[i] == null) {
          alert('Silahkan jawab semua soal');
          break;
        } else {
          const BoolSoal = Boolean(Number(datasoal[i].value));
          console.log(BoolSoal);
          console.log(typeof (BoolSoal));
        }
      }

      datasoal.length = 0;
      console.log(datasoal);
      // const valueNama = document.querySelector('#name');
      // const valueEmail = document.querySelector('#email');
      // const valuefeedback = document.querySelector('#feedback');
      // const feedbackPost = {
      //   nama: valueNama.value,
      //   email: valueEmail.value,
      //   feedback: valuefeedback.value,
      // };
      // console.log(JSON.stringify(feedbackPost));

      // DBPost.post(feedbackPost);
      // feedbackContainer.reset();
    });
  },
};

export default KuisPengenalan;
