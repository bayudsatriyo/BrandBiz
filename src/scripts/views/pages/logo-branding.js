const LogoBranding = {
  async render() {
    return `
    <style>
      .app-bar__navigation{
        height: 100vh;
      }
    </style>
      <div class="container">
      <h1 class="judul">Menerapkan Visual Branding</h1>
      <div class="deskripsi">
      <p>Visual branding adalah strategi branding yang melibatkan aspek visual seperti logo, warna, tipografi, dan gambar dalam membangun citra merek produk UMKM. Melalui visual branding, UMKM dapat menciptakan identitas visual yang kuat yang dapat membedakan produk mereka dari pesaing.</p>
      <p>Berikut adalah beberapa poin penting yang harus dipertimbangkan dalam melakukan visual branding untuk produk UMKM:</p>
      <h1>1. Logo</h1>
      <p>Logo adalah elemen visual yang sangat penting dalam visual branding. Logo produk harus mudah dikenali, simpel dan mudah diingat untuk memudahkan pelanggan mengingat merek UMKM.</p>
      <h1>2. Warna</h1>
      <p>Warna juga sangat penting dalam visual branding. Warna-warna yang dipilih harus mencerminkan merek UMKM dan sesuai dengan sasarannya. Misalnya, warna merah dapat digunakan untuk merek yang ingin menunjukkan keberanian, sementara warna biru dapat digunakan untuk menunjukkan kepercayaan dan keamanan.</p>
      <h1>3. Tipografi</h1>
      <p>Tipografi adalah gaya huruf yang digunakan dalam logo dan materi visual branding lainnya. Tipografi harus mudah dibaca, cocok untuk produk UMKM, dan mencerminkan citra merek produk.</p>
      <h1>4. Gambar</h1>
      <p>Gambar atau visualisasi produk adalah elemen visual penting dalam visual branding. Gambar harus mencerminkan merek UMKM, sesuai dengan sasarannya, dan mudah dikenali.</p>
      <img src="stationery-mavec-19.jpg" alt="LogoBranding" crossorigin="anonymous">
      <p>Gambar produk produk diatas adalah implementasi dari Visual Branding, dimana secara tampilan dari desain produk mencerminkan logo produk tersebut</p>
      <br>
      <p>Selain itu, konsistensi merupakan kunci keberhasilan dalam visual branding. Semua elemen visual branding harus konsisten dalam setiap media yang digunakan untuk membangun merek. Hal ini akan membantu para pelanggan tetap mengingat dan terhubung dengan merek UMKM dengan mudah.</p>
      <p>Visual branding yang baik dapat membantu produk UMKM untuk menarik minat pelanggan dan membedakan produk mereka dari pesaing. Konsumen cenderung lebih tertarik pada produk yang memiliki identitas merek yang kuat dan terlihat profesional. Dengan melalui visual branding yang baik, UMKM dapat memperkuat mereknya dan membangun kesetiaan pelanggan yang lebih baik.</p>
      </div>
      </div>
      <div class="transition_page">
      <a href="#/merek">Sebelumnya</a>
      <a href="#/kontent">Selanjutnya</a>
      </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const hamburgerHome = document.getElementById("hamburgerButtonHome");
    hamburgerHome.setAttribute("hidden", "");
    const TombolLogin = document.getElementById("signInHome");
    TombolLogin.setAttribute("hidden", "");
    const logo = document.querySelector(".nav-title img");
    logo.setAttribute("hidden", "");
    const backButton = document.getElementById("back");
    backButton.removeAttribute("hidden");
    const navigation = document.querySelectorAll(
      "#navigationDrawerHome .listnav"
    );
    navigation.forEach((nav) => {
      nav.setAttribute("hidden", "");
    });
  },
};

export default LogoBranding;
