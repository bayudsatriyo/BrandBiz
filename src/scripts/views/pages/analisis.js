const Analisis = {
  async render() {
    return `
    <div class="container">
    <h1 class="judul">Kenali Audiens</h1>
    <img src="Sandy-Bus-31-Single-05.jpg" alt="introduction" crossorigin="anonymous">
    <div class="deskripsi">
    <p>Sebagian besar pengusaha yang baru merintis produk mereka sering kali kurang mengenali dan memahami konsumen atau audiens,
      padahal ini sangatlah penting sebagai langkah awal dalam melakukan Branding. Lalu bagaimana cara kita untuk mengenali audiens atau konsumen ?</p>
      <p>Berikut adalah beberapa cara untuk mengenali audiens dalam menerapkan branding sebuah produk UMKM :</p>
      <h1>1. Analisis target pasar</h1>
      <p>Melakukan analisis target pasar adalah cara terbaik untuk mengenali audiens Anda. Anda dapat memeriksa demografi, seperti usia, jenis kelamin, lokasi geografis, dan pendapatan. 
      Anda juga dapat mengetahui perilaku, preferensi, dan kebutuhan pelanggan potensial.</p>
      <h1>2. Pelajari perilaku audiens</h1>
      <p>Pelajari perilaku audiens Anda. Dengan melakukan riset pasar dan analisis data, Anda dapat mendapatkan informasi tentang kebiasaan dan preferensi konsumen terkait penggunaan produk atau layanan Anda.</p>
      <h1>3. Tentukan posisi merek</h1>
      <p>Tentukan di mana merek Anda berada di pasar dan identifikasi kekuatan dan kelemahan pesaing Anda. Dengan mengetahui posisi Anda dan pesaing, Anda dapat menentukan bagaimana merek Anda dapat menonjol dan menjadi pilihan terbaik bagi konsumen Anda.</p>
      <h1>4. Membuat persona pelanggan</h1>
      <p>Persona pelanggan adalah gambaran fiksi dari pelanggan ideal Anda. Membuat persona pelanggan dapat 
      membantu Anda lebih memahami audiens dan membangun merek Anda sesuai dengan preferensi mereka.</p>
      <h1>5. Membuat survei</h1>
      <p>Survei dapat membantu Anda memperoleh masukan langsung dari audiens Anda. Anda dapat mengirim survei melalui email, 
      media sosial, atau situs web Anda. Survei dapat membantu Anda memahami kebutuhan dan preferensi pelanggan potensial Anda.</p>
      <h1>6. Mengikuti saingan</h1>
      <p>Anda Melihat saingan Anda dapat membantu Anda memahami audiens mereka dan bagaimana merek mereka memenuhi kebutuhan pelanggan. 
      Anda dapat melihat bagaimana merek saingan membangun merek dan bagaimana merek mereka disampaikan kepada audiens.</p>
    </div>
    </div>
    <div class="transition_page">
    <a href="#/pengenalan">Sebelumnya</a>
    <a href="#/merek">Selanjutnya</a>
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

export default Analisis;
