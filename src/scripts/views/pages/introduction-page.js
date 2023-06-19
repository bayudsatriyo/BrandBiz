const Introduction = {
  async render() {
    return `
    <div class="container">
    <h1 class="judul">Pengenalan Branding</h1>
    <img src="https://i.postimg.cc/cJ5jBZHr/7811254.jpg" alt="introduction" crossorigin="anonymous">
    <div class="deskripsi">
    <h1>Apasih Branding itu ?</h1>
    <p>Branding adalah proses membangun citra, identitas, dan reputasi bisnis atau produk dalam benak konsumen. 
    Branding sangat penting bagi produk UMKM karena lebih dari sekedar membuat logo atau nama merek, branding dapat 
    membantu UMKM membangun hubungan emosional dengan pelanggan, membedakan produk dari pesaing, dan meningkatkan nilai jual produk.</p>
    <p>Membangun branding yang kuat bagi produk UMKM dapat membantu meningkatkan keterlibatan pelanggan, meningkatkan kesadaran merek pada pasar, 
    dan membuat produk lebih mudah diingat oleh konsumen. Dengan membangun branding yang kuat, UMKM dapat membedakan diri dari pesaing, 
    membangun kepercayaan pelanggan, dan memperluas pangsa pasar. Hal ini dapat membantu UMKM tumbuh dan berkembang dalam jangka panjang.</p>
    </div>
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

export default Introduction;
