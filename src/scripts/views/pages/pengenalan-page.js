const Pengenalan = {
  async render() {
    return `
    <div class="container">
    <h1 class="judul">Pengenalan Branding</h1>
    <img src="https://i.postimg.cc/prWpsd6r/Introduction.png" alt="introduction" crossorigin="anonymous">
    <div class="deskripsi">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sit provident eveniet modi, eos vitae enim iusto, doloremque earum harum placeat? Aliquam quasi minima recusandae eos libero maiores suscipit qui.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, illum temporibus! Provident, eaque dignissimos eos, fugit vero fuga unde officia, est modi nemo id nostrum sunt. Ipsa laudantium ea possimus.</p>
    </div>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Pengenalan;
