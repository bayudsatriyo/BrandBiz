import feedback from '../templates/form_feedback';
import feedbackInitiator from '../../utils/feedback';

const Evaluasi = {
  async render() {
    return `
        <div class="container">
        <h1 class="judul">Evaluasi dan Perbaikan</h1>
        <img src="https://i.postimg.cc/brws2ZGr/2212205.jpg" alt="introduction" crossorigin="anonymous">
        <div class="deskripsi">
        <p>Evaluasi dan perbaikan merupakan bagian penting dalam melakukan branding produk. Evaluasi dapat membantu perusahaan untuk mengetahui seberapa efektif strategi branding yang telah diterapkan, sedangkan perbaikan dapat membantu perusahaan untuk meningkatkan efektifitas branding produk. Berikut ini adalah penjelasan lengkap mengenai evaluasi dan perbaikan dalam melakukan branding produk:
        </p>
        <br>
        <h3>1. Evaluasi Brand Awareness</h3>
        <p>Evaluasi brand awareness dapat dilakukan melalui riset untuk mengetahui sejauh mana produk telah dikenal oleh masyarakat atau konsumen potensial. Risiko ini dapat dilakukan melalui survei atau pengamatan langsung. Hasil evaluasi dapat membantu perusahaan menentukan arah strategi branding yang harus ditingkatkan atau diperbaiki.
        </p>
        <br>
        <h3>2. Evaluasi Brand Image</h3>
        <p>Evaluasi brand image adalah proses untuk mengetahui persepsi konsumen tentang merek atau produk secara umum. Evaluasi ini dapat dilakukan melalui survei atau wawancara yang dilakukan secara langsung. Dari evaluasi tersebut, perusahaan dapat mengetahui kekuatan dan kelemahan dari brand image yang sudah terbentuk.
        </p>
        <br>
        <h3>3. Evaluasi Produk dan Kualitas</h3>
        <p>Layanan Produk dan kualitas layanan yang baik merupakan faktor penting dalam branding produk. Oleh karena itu, evaluasi produk dan kualitas layanan adalah perlu dilakukan untuk mengetahui seberapa baik produk dan kualitas layanan perusahaan telah dihasilkan. Evaluasi ini dapat melibatkan pelanggan seperti customer satisfaction survey atau feedback langsung.
        </p>
        <br>
        <h3>4. Perbaikan Image Merek</h3>
        <p>Setelah melakukan evaluasi terhadap image merek, perusahaan perlu melakukan perbaikan terhadap image merek jika diperlukan. Hal ini dapat dilakukan dengan memperbaiki kualitas produk, melakukan promosi atau penawaran khusus, rebranding atau membuat iklan yang berbeda.
        </p>
        <br>
        <h3>5. Perbaikan Positioning Produk</h3>
        <p>Positioning produk adalah posisi produk di benak konsumen atau seberapa jauh konsumen mengenali atau menyadari keberadaan produk tersebut di pasar. Jika evaluasi menunjukkan bahwa positioning produk atau branding kurang tepat, maka perusahaan perlu melakukan perbaikan seperti memperbaiki desain produk atau mengubah situasi produk lebih unik, mengubah iklan, atau memperbarui website perusahaan.
        </p>
        <br>
        <h3>6. Perbaikan Komunikasi dan Promosi</h3>
        <p>Evaluasi dapat memberikan informasi yang penting untuk perusahaan yang berkaitan dengan cara mereka berkomunikasi dengan konsumen dan menelusuri taktik promosi. Jika evaluasi menunjukkan bahwa kampanye promosi kurang tepat, perusahaan perlu melakukan perbaikan seperti mengubah taktik promosi atau melakukan kampanye promosi yang berbeda.</p>
        </p>
        <p>Dalam melakukan branding produk, evaluasi dan perbaikan adalah hal yang penting untuk dilakukan. Evaluasi dapat membantu perusahaan mengetahui kelemahan branding produk yang sudah ada dan memperbaiki kelemahan tersebut untuk meningkatkan efektifitas branding produk. Dengan demikian, perbaikan dapat membawa keberhasilan dan kesuksesan dalam branding produk.</p>
        </div>
        <div class="feedback-form">
        <h2>Feedback Form</h2>
        <form id="formFeedback">
        </form>
        </div>
        </div>
        <div class="transition_page">
        <a href="#/strategi">Sebelumnya</a>
        <a href="#/kuispengenalan">Selanjutnya</a>
        </div>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const hamburgerHome = document.getElementById('hamburgerButtonHome');
    hamburgerHome.setAttribute('hidden', '');
    const TombolLogin = document.getElementById('signInHome');
    TombolLogin.setAttribute('hidden', '');
    const logo = document.querySelector('.nav-title img');
    logo.setAttribute('hidden', '');
    const backButton = document.getElementById('back');
    backButton.removeAttribute('hidden');
    const navigation = document.querySelectorAll('#navigationDrawerHome .listnav');
    navigation.forEach((nav) => {
      nav.setAttribute('hidden', '');
    });
    const feedbackContainer = document.querySelector('#formFeedback');
    feedbackContainer.innerHTML += feedback();
    await setTimeout(() => {}, 1000);
    feedbackInitiator(feedbackContainer);
  },
};

export default Evaluasi;
