import KuisDB from '../../data/kuisDB';
import createSoal from '../templates/form_kuis';

const KuisPage = {
  async render() {
    return `
      <div class="container">
      <h1 class="judul"></h1>
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

  async afterRender(indexkuis) {
    // Fungsi ini akan dipanggil setelah render()
    const soalContainer = document.getElementById('soal-container');
    const kuis = await KuisDB.get();
    const { soal } = kuis[indexkuis];
    const judulKuis = kuis[indexkuis].judul;
    const judul = document.querySelector('.judul');
    console.log(judulKuis);
    judul.innerHTML = judulKuis;
    soal.forEach((perSoal, index) => {
      soalContainer.innerHTML += createSoal(perSoal, index);
    });
    const buttonSubmit = document.getElementById('form-kuis');
    buttonSubmit.addEventListener('submit', (event) => {
      // menghentikan aksi bawaan form
      event.preventDefault();
      const datasoal = [];
      let nilai = 0;
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
          if(BoolSoal === true){
            nilai += 1;
          }
        }
      }

      console.log(nilai);

      datasoal.length = 0;
      console.log(datasoal);
    });
  },
};

export default KuisPage;
