const Kontent = {
  async render() {
    return `
        <div class="container">
        <h1 class="judul">Konten Branding</h1>
        <br>
        <iframe class="vidmateri" src="https://www.youtube.com/embed/a9cPeBW0o98" title="CINEMATIC VIDEO RE-BRANDING PRODUK KEMASAN UMKM BUCANDRA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="deskripsi">
        <p>Video diatas merupakan salah satu contoh visualisasi kontent branding produk dalam bentuk video</p>
        <p>Konten branding mencakup aspek non-visual seperti pesan merek dan storytelling merek. Pesan merek harus mencakup informasi 
        penting tentang produk dan memberikan nilai tambah bagi pelanggan. Storytelling merek dapat membantu UMKM membangun koneksi emosional dengan pelanggan.</p>
        <p>Pembuatan konten branding produk melibatkan beberapa langkah dan proses. Berikut adalah penjelasan lengkap mengenai pembuatan konten branding produk:
        </p>
        <br>
        <h3>1. Analisis Produk dan Target Pasar</h3>
        <p>Hal pertama yang harus dilakukan adalah melakukan analisis produk dan target pasar. Hal ini berguna untuk mengetahui karakteristik produk dan sasaran pasar yang dituju, sehingga dapat membuat strategi pencitraan dan branding yang tepat.
        </p>
        <br>
        <h3>2. Menentukan Brand Identity</h3>
        <p>Langkah selanjutnya adalah menentukan brand identity. Brand identity mencakup logo, font yang digunakan, warna, slogan, dan aspek visual lainnya. Semua elemen ini harus dipilih dengan hati-hati, dan selaras dengan karakteristik produk dan target pasar.
        </p>
        <br>
        <h3>3. Membuat Konten Visual</h3>
        <p>Konten visual termasuk desain produk, gambar, dan visual lainnya. Desain produk harus dibuat menarik agar dapat menarik perhatian konsumen. Aspek visual ini juga harus selaras dengan brand identity yang sudah ditentukan sebelumnya.
        </p>
        <br>
        <h3>4. Membuat Konten Teks</h3>
        <p>Konten teks mencakup deskripsi produk, motto, pesan, cerita, dan informasi lainnya yang dibutuhkan. Konten teks harus menunjukkan nilai unik produk dan menggambarkan karakteristik produk dengan jelas.
        </p>
        <br>
        <h3>5. Menyebarluaskan Konten Branding</h3>
        <p>Langkah terakhir adalah menyebarluaskan konten branding. Konten branding dapat disebarluaskan melalui berbagai media seperti digital marketing, sosial media, website, brosur, video, iklan, dan lain-lain.</p>
        </p>
        <p>Dalam proses pembuatan konten branding, perlu diingat bahwa tersebut tidak hanya mencakup produknya saja, tapi juga karakter dan citra merek yang ingin ditunjukkan. Oleh karena itu, penting untuk mempertimbangkan branding sebagai bagian dari 
        strategi pemasaran yang holistik, menggabungkan pencitraan dan komunikasi merek dengan kebutuhan bisnis dan pandangan jangka panjang.</p><br>
        <img src="https://i.postimg.cc/G22DhqJq/give-away.jpg" alt="giveaway" crossorigin="anonymous">
        <p>Gambar diatas adalah contoh kontent dalam bentuk gambar yang di promosikan melalui platform media sosial</p>
        </div>
        </div>
        <div class="transition_page">
        <a href="#/logo">Sebelumnya</a>
        <a href="#/strategi">Selanjutnya</a>
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

export default Kontent;
