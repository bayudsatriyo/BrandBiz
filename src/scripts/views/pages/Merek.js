const Merek = {
  async render() {
    return `
      <div class="container">
      <h1 class="judul">Definisi Nilai Merek Dalam Branding</h1>
      <img src="https://i.postimg.cc/sgYpXtG1/6666301.jpg" alt="introduction" crossorigin="anonymous">
      <div class="deskripsi">
      <h1>Apakah kalian sudah mengetahui apa itu Merek ?</h1>
      <p>Merek adalah simbol, vokal, atau desain tertentu yang digunakan oleh suatu perusahaan untuk membedakan produk atau layanannya dari produk atau 
      layanan yang ditawarkan oleh perusahaan lain. Merek menjadi sangat penting untuk produk UMKM karena produk UMKM seringkali bersaing dengan produk-produk yang lebih besar dan lebih terkenal. 
      Dengan merek yang kuat dan berarti, produk UMKM dapat membedakan dirinya dari produk lain dan mendorong pengguna untuk memilih produk mereka.</p>
      <p>Definisi nilai merek dalam branding produk UMKM sangat penting dalam membangun produk yang dimiliki perusahaan dengan baik. Nilai merek terdiri dari kepercayaan, kualitas, keaslian, dan 
      konsistensi yang diberikan pada merek produk UMKM tersebut. Dalam membangun merek yang kuat, UMKM harus mempertimbangkan beberapa faktor, seperti: </p>
      <p>1. Deskripsikan visi dan misi UMKM Anda - Jangan hanya fokus pada produk yang dihasilkan, tetapi pikirkan tentang visi dan misi UMKM Anda. Hal ini dapat membantu Anda menentukan nilai-nilai inti yang ingin dicerminkan merek.</p>
      <p>2. Identifikasi sasaran pasar - UMKM yang sukses memahami sasarannya dengan baik. Dengan memahami siapa yang ingin Anda jual, Anda dapat menyesuaikan nilai merek untuk mencerminkan apa yang penting bagi target pasar Anda.</p>
      <p>3. Tentukan nilai inti produk Anda - Nilai inti meliputi hal seperti kualitas, keandalan, keaslian, dan inovasi - hal-hal yang membuat produk Anda unik. Nilai inti ini harus dicerminkan dalam branding merek Anda.</p>
      <p>4. Tentukan pesan merek - Pesan yang Anda sampaikan melalui merek Anda harus sesuai dengan nilai-nilai merek Anda. Pesan tersebut harus jelas, mudah diingat, dan dapat memotivasi pengguna untuk membeli produk Anda.</p>
      <p>5. Gunakan media sosial dan konten pemasaran - Dalam dunia digital saat ini, media sosial adalah cara yang paling efektif dalam mempromosikan merek dan memasarkan produk UMKM. Gunakan media sosial untuk membangun kesadaran merek dan gunakan konten pemasaran untuk mendukung nilai-nilai inti yang ingin dicerminkan dalam branding merek Anda.</p>
      <br>
      <p>Nilai merek dapat membantu UMKM untuk membangun hubungan jangka panjang dengan pelanggan dan meningkatkan kepercayaan pelanggan pada merek dan produk Anda. Dalam waktu yang lama, nilai merek yang baik dapat meningkatkan nilai merek, konversi penjualan, dan meningkatkan reputasi UMKM yang bersangkutan.</p>
      </div>
      </div>
      <div class="transition_page">
      <a href="#/analisis">Sebelumnya</a>
      <a href="#/logo">Selanjutnya</a>
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
  },
};

export default Merek;
