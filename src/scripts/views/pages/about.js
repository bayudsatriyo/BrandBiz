const About = {
  async render() {
    return `
      <div class="container about"> <h1>About BrandBiz</h1> 
      <p>BrandBiz adalah website edukasi yang menyediakan materi materi mengenai Branding Produk untuk pengusaha atau UMKM.
      BrandBiz bertujuan untuk membantuk meningkatkan kualitas UMKM di Indonesia, agar UMKM di indonesia mampu bersaing mengikuti pasar global dan dapat mencapai target yang maksimal.
      dengan materi materi yang kami sediakan, harapan kami agar UMKM mampu menerapkan branding pada produk UMKM menjadi lebih maksimal dan menjadi lebih dikenal oleh masyarakat</p>
    <h2>Ceo Brandbiz</h2>
    <div class="tim-container">
        <div class="tim blue">
            <img src="bayu.jpeg" alt="Bayu Dwi Satrio">
            <h2>Bayu Dwi Satriyo</h2>
            <h3>Front End & Back End Developer</h3>
            <p>Universitas Sahid Surakarta</p>
        </div>
    </div>
</div>
              `;
  },

  async afterRender() {
    const hamburger = document.getElementById("hamburgerButton");
    const login = document.getElementById("signInHome");
    hamburger.setAttribute("hidden", "");
    login.addEventListener("click", (event) => {
      event.preventDefault();
      localStorage.setItem("user", "login");
      login.setAttribute("hidden", "");
      location.assign("#/login");
    });
  },
};

export default About;
