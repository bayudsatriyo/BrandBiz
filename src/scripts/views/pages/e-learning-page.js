const ELearning = {
  async render() {
    return `
    <section class="learning-hero">
    <div class="learning-hero-container">
      <div class="learning-hero-content">
        <h1>study from home with expert</h1>
        <div class="learning-hero-description">
          <p>
            A learning system based on formalised teaching with the help of
            resources.
          </p>
        </div>
        <form>
          <button id="getStarted">Get Started</button>
          <button id="learnMore">Learn More</button>
        </form>
      </div>
      <div class="learning-hero-image">
        <img src="./Banner Image.png" alt="Banner Hero" />
      </div>
    </div>
  </section>

  <section class="learning-discover">
    <h1>Discover</h1>
    <div class="learning-discover-container-1">
      <div class="discover-item">
        <img src="./image 1.png" alt="Modul" />
        <div class="discover-modul">
          <h1>Cara jitu branding bisnis online anda</h1>
          <div class="profile">
            <div class="profile-image">
              <img src="./discover 2.png" alt="" />
            </div>
            <div class="profile-name">
              <p class="name">Thomas Hope</p>
              <p class="views">53K views • 2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
      <div class="discover-item">
        <img src="./548377_620.jpg" alt="Modul" />
        <div class="discover-modul">
          <h2>Hasilkan cuan dengan modal kecil</h2>
          <div class="profile">
            <div class="profile-image">
              <img src="./discover 2.png" alt="" />
            </div>
            <div class="profile-name-2">
              <p class="name">Thomas Hope</p>
              <p class="views">10K views • 5 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="learning-discover-container-2">
      <div class="modul-item">
        <img src="./image 5.png" alt="Modul" />
        <div class="modul-description">
          <img src="./image 10.png" alt="Avatar" class="image-avatar">
          <p class="name">Gerry Geraldi <span>•</span></p>
          <h3 class="modul-title">
          Strategi Branding untuk pemula
          </h3>  
          <p class="status">53K views  •  34 weeks ago</p>
        </div>
      </div>
      <div class="modul-item">
        <img src="./image 5.png" alt="Modul" />
        <div class="modul-description">
          <img src="./image 10.png" alt="Avatar" class="image-avatar">
          <p class="name">Gerry Geraldi <span>•</span></p>
          <h3 class="modul-title">
          Desain grafis untuk branding usaha UMKM
          </h3>  
          <p class="status">5K views  •  1 weeks ago</p>
        </div>
      </div>
      <div class="modul-item">
        <img src="./image 5.png" alt="Modul" />
        <div class="modul-description">
          <img src="./image 10.png" alt="Avatar" class="image-avatar">
          <p class="name">Gerry Geraldi <span>•</span></p>
          <h3 class="modul-title">
          Strategi Pemasaran Media Sosial untuk Branding
          </h3>  
          <p class="status">29K views  •  5 weeks ago</p>
        </div>
      </div>
      <div class="modul-item">
        <img src="./image 5.png" alt="Modul" />
        <div class="modul-description">
          <img src="./image 10.png" alt="Avatar" class="image-avatar">
          <p class="name">Gerry Geraldi <span>•</span></p>
          <h3 class="modul-title">
          Copywriting dan Branding
          </h3>  
          <p class="status">13K views  •  14 weeks ago</p>
        </div>
      </div>
      <div class="modul-item">
        <img src="./image 5.png" alt="Modul" />
        <div class="modul-description">
          <img src="./image 10.png" alt="Avatar" class="image-avatar">
          <p class="name">Gerry Geraldi <span>•</span></p>
          <h3 class="modul-title">
          Manajemen Reputasi Online
          </h3>  
          <p class="status">5K views  •  10 weeks ago</p>
        </div>
      </div>
      <div class="modul-item">
        <img src="./image 5.png" alt="Modul" />
        <div class="modul-description">
          <img src="./image 10.png" alt="Avatar" class="image-avatar">
          <p class="name">Gerry Geraldi <span>•</span></p>
          <h3 class="modul-title">
          Video Marketing untuk Branding
          </h3>  
          <p class="status">100K views  •  1 weeks ago</p>
        </div>
      </div>
      <div class="modul-item">
        <img src="./image 5.png" alt="Modul" />
        <div class="modul-description">
          <img src="./image 10.png" alt="Avatar" class="image-avatar">
          <p class="name">Gerry Geraldi <span>•</span></p>
          <h3 class="modul-title">
          Analisis Branding dan Pengukuran Kinerja
          </h3>  
          <p class="status">23K views  •  8 weeks ago</p>
        </div>
      </div>
      <div class="modul-item">
        <img src="./image 5.png" alt="Modul" />
        <div class="modul-description">
          <img src="./image 10.png" alt="Avatar" class="image-avatar">
          <p class="name">Gerry Geraldi <span>•</span></p>
          <h3 class="modul-title">
          Kelas Fotografi Produk
          </h3>  
          <p class="status">11K views  •  2 weeks ago</p>
        </div>
      </div>
      <div class="modul-item">
        <img src="./image 5.png" alt="Modul" />
        <div class="modul-description">
          <img src="./image 10.png" alt="Avatar" class="image-avatar">
          <p class="name">Gerry Geraldi <span>•</span></p>
          <h3 class="modul-title">
          Customer Relationship Management (CRM) 
          </h3>  
          <p class="status">60K views  •  4 weeks ago</p>
        </div>
      </div>
      <div class="modul-item">
        <img src="./image 5.png" alt="Modul" />
        <div class="modul-description">
          <img src="./image 10.png" alt="Avatar" class="image-avatar">
          <p class="name">Gerry Geraldi <span>•</span></p>
          <h3 class="modul-title">
          Pengalaman Pelanggan yang Membangun Merek
          </h3>  
          <p class="status">34K views  •  8 weeks ago</p>
        </div>
      </div>
    </div>
  </section>        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default ELearning;
