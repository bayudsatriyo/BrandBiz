import KuisDB from '../../data/kuisDB';
import createSoal from '../templates/form_kuis';
import createRow from '../templates/table_nilai';
import userAkun from '../../data/users';
import kuisPost from '../../data/kuisPost';

const generateStatus = (nilaibenar, jumlahsoal) => {
  let standar = jumlahsoal - 3;
  if(nilaibenar < standar){
    return 'Tidak Lulus';
  }
  return 'Lulus';
}

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
      <table id='penilaian'>
  <thead>
    <tr>
      <th>Tanggal</th>
      <th>Nilai Kuis</th>
      <th>Presentase</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
      </div>
      <div class="transition_page">
      <button type="button" class="back">Sebelumnya</button>
      <button type="button" class="next">Selanjutnya</button>
      </div>
        `;
  },

  async afterRender(indexkuis) {
    // Fungsi ini akan dipanggil setelah render()
    const navigation = document.querySelectorAll('#navigationDrawerHome .listnav');
    navigation.forEach((nav) => {
      nav.setAttribute('hidden', '');
    });
    let kuisUser = JSON.parse(localStorage.getItem('user'));
    const soalContainer = document.getElementById('soal-container');
    const kuis = await KuisDB.get();
    const { soal } = kuis[indexkuis];
    const judulKuis = kuis[indexkuis].judul;
    const judul = document.querySelector('.judul');
    const tableBody = document.querySelector('tbody');
    const TombolLogin = document.getElementById('signInHome');
    const hamburgerHome = document.getElementById('hamburgerButtonHome');
    hamburgerHome.setAttribute('hidden', '');
    TombolLogin.setAttribute('hidden', '');
    const logo = document.querySelector('.nav-title img');
    logo.setAttribute('hidden', '');
    const backButton = document.getElementById('back');
    backButton.removeAttribute('hidden');
    console.log(judulKuis);
    judul.innerHTML = judulKuis;
    soal.forEach((perSoal, index) => {
      soalContainer.innerHTML += createSoal(perSoal, index);
    });
    console.log(kuisUser.user.nilai[indexkuis]);
    if(kuisUser.user.nilai[indexkuis] !== undefined){
      tableBody.innerHTML = createRow(kuisUser.user.nilai[indexkuis]);
    }
    const buttonSubmit = document.getElementById('form-kuis');
    buttonSubmit.addEventListener('submit', (event) => {
      // menghentikan aksi bawaan form
      event.preventDefault();
      const datasoal = [];
      let nilai = 0;
      let today = new Date();
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
      const dataNilai = {
        date: today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear(),
        judul: judulKuis,
        total: nilai,
        presentase: Math.round(nilai / (soal.length/100)),
        status: generateStatus(nilai, soal.length)
      };
      if(kuisUser.user.nilai[indexkuis] != undefined){
        kuisUser.user.nilai.splice(indexkuis, 1, dataNilai);
        console.log("nilai yang sudah ada diganti")
      }else{
        kuisUser.user.nilai.splice(indexkuis, 0, dataNilai);
        console.log('nilai ditambahkan')
      }
      
      localStorage.setItem('user', JSON.stringify(kuisUser));
      console.log(kuisUser.user.nilai[indexkuis]);
      const data = {
        users_id: kuisUser.user.id,
        nilai: kuisUser.user.nilai
      };
      kuisPost.post(data.users_id, data)
      tableBody.innerHTML = createRow(kuisUser.user.nilai[indexkuis]);
      for (let i = 0; i < soal.length; i += 1) {
        datasoal[i] = document.querySelector(`input[name="soal${i}"]:checked`);
        datasoal[i].checked = false;
        }

      datasoal.length = 0;
      console.log(datasoal);
    });
    const linkNext = document.querySelector('.next');
    const linkBack = document.querySelector('.back');
    if(indexkuis == 4){
      linkNext.setAttribute('hidden', '');
    }else{
      linkNext.removeAttribute('hidden');
    }
    linkNext.addEventListener('click', (event) => {
      let linkSoal = document.querySelector(`.next${indexkuis + 1}`);
      console.log(linkSoal);
      linkSoal.click();
    })

    linkBack.addEventListener('click', (event) => {
      let linkSoalLalu = null;
      if(indexkuis == 0){
        linkSoalLalu = document.querySelector('.evaluasi');
        linkSoalLalu.click();
      }else{
        linkSoalLalu = document.querySelector(`.next${indexkuis - 1}`);
        linkSoalLalu.click();
      }
    })
  },
};

export default KuisPage;
