const Strategi = {
  async render() {
    return `
        <div class="container">
        <h1 class="judul">Strategi Marketing Dalam Branding</h1>
        <br>
        <iframe width="853" height="480" src="https://www.youtube.com/embed/vxjLDc8aQ5k" title="Kelas Fantastic Brand | Belajar Branding Produk Strategi Branding yang Mudah dan Ampuh Bagi UMKM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="deskripsi">
        <h1>Apakah ada Strategi Khusus yang harus diterapkan dalam Branding ? <br>
        Apa Strategi Marekting dalam branding itu ?</h1>
        <p>Strategi marketing dalam branding produk adalah sebuah konsep perencanaan pemasaran produk untuk memberikan nilai tambah bagi konsumennya dan memperkuat branding produk. 
        Berikut ini adalah penjelasan lengkap mengenai strategi marketing dalam branding produk:
        <br>
        <h1>1. Studi pasar dan pesaing</h1>
        <p>Sebelum mengembangkan strategi marketing, perlu dilakukan studi pasar dan pesaing. Hal ini berguna untuk memahami kebutuhan dan preferensi konsumen, serta mengetahui kekuatan dan kelemahan produk di pasar. Dengan begitu, strategi pemasaran yang dijalankan dapat lebih efektif.</p>
        <h1>2. Menentukan target</h1>
        <p>market Setelah studi pasar dan pesaing telah dilakukan, langkah selanjutnya adalah menentukan target market. Target market ini bisa berupa kelompok usia, gender, tingkat pendidikan, penghasilan, dan lain sebagainya. Dengan mengetahui target market yang tepat, aktivitas branding dapat diarahkan secara spesifik kepada kelompok tersebut.
        </p>
        <h1>3. Menentukan positioning produk</h1>
        <p>Positioning produk adalah posisi produk yang ingin ditunjukkan di hati konsumen. Konsep positioning produk ini dirancang dengan melihat keunggulan produk dibandingkan pesaing dan memperkuat nilai tambah yang dimiliki produk. Dengan positioning yang tepat, produk dapat menjadi lebih menonjol di pasaran.
        </p>
        <h1>4. Menjalin kemitraan</h1>
        <p>Kemitraan dapat membantu meningkatkan eksposur merek dari produk dan memperluas jangkauan pasar yang diincar. Kemitraan mungkin dilakukan dengan individu atau organisasi yang memiliki kesamaan nilai ataupun melalui endorse dari selebriti atau kreator content populer.
        </p>
        <h1>5. Menerapkan gaya komunikasi yang konsisten</h1>
        <p>Gaya komunikasi tidak hanya melibatkan bahasa verbal yang dipilih, tetapi juga visual, grafis, dan sebagainya. Penting bagi sebuah produk untuk memiliki gaya komunikasi yang tegas dan konstan agar dapat membangun kesan dan nilai positif bagi konsumen.
        </p>
        <h1>6. Menerapkan strategi konten yang tepat</h1>
        <p>Menerapkan strategi konten yang tepat agar dapat menjangkau dan memengaruhi lebih banyak konsumen. Strategi konten meliputi desain produk, visual konten, video, konten di media sosial, review, endorsasi, dan lainnya.
        </p>
        <h1>7. Mengoptimalkan kampanye promosi</h1>
        <p>Kampanye promosi dilakukan dengan memperkenalkan produk ke khalayak tertentu melalui berbagai media atau cara. Promo yang dilakukan bisa mengambil bentuk diskon, hadiah, acara, dan lainnya. Melalui kampanye promosi, produk dapat dikenal oleh lebih banyak konsumen.</p>
        <p>Itulah penjelasan mengenai strategi marketing dalam branding produk. Melalui strategi pemasaran yang tepat, produk dapat berhasil di pasar dan membangun citra merek yang kuat.</p>
        <p>Bagaimana ni apakah sudah memahami mengenai strategi marketing dalam branding, pasti paham ya, jangan lupa untuk diterapkan dalam membranding produk kalian ya, semangat berwirausaha!!</p>
        <br>
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

export default Strategi;
