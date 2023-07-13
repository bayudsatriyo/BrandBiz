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
            <a href="#/introduction" id="getStarted">Get Started</a>
          </form>
        </div>
        <div class="learning-hero-image">
          <img src="https://i.postimg.cc/SxBCc8dP/Banner-Image.png" alt="Banner Hero" />
        </div>
      </div>
    </section>
  
<section class="learning-discover">
      <h1>Discover</h1>
    <div class="learning-discover-container-1">
        <div class="discover-item">
          <div class="discover-modul">
          <a href="#/introduction" id="modul"><h1>Belajar Dasar Branding Produk</h1></a>
            <div class="profile">
              <div class="profile-name">
                <a href="#/introduction" id="modul">Modul ini berisi mengenai pengertian dasar dasar melakukan Branding pada suatu Produk</a>
              </div>
            </div>
          </div>
        </div>
        <div class="discover-item2">
          <div class="discover-modul">
                <a href="#/learning"><h1>Belajar Dasar Strategi Pemasaran</h1></a>
                    <div class="profile">
                        <div class="profile-name">
                            <p class="name">Coming Soon</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
      <h1 class="how">How to do Basic Jumping and how to landing safely</h1>
      <div class="learning-discover-container-2">
        <div class="modul-item">
          <img src="https://i.postimg.cc/tg05z8Dp/istockphoto-1413766112-170667a.jpg" alt="Modul" />
          <div class="modul-description">
            <h3 class="modul-title">
              Basic how to ride your skateboard comfortly
            </h3>
            <p>Coming Soon</p>
          </div>
        </div>
        <div class="modul-item">
          <img src="https://i.postimg.cc/R0RGgN2T/jose-vazquez-Q5-RBHz9cu1-A-unsplash.jpg" alt="Modul" />
          <div class="modul-description">
            <h3 class="modul-title">
              Basic how to ride your skateboard comfortly
            </h3>
            <p>Coming Soon</p>
          </div>
        </div>
      </div>
</section>        `;
    },
  
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
      const navigation = document.querySelectorAll('#navigationDrawerHome .listnav');
      const navdrawer = document.querySelector('#hamburgerButton');
      const TombolLogin = document.getElementById('signInHome');
      const modul = document.getElementById('modul');
      const getStarted = document.getElementById('getStarted');
      const hamburgerHome = document.getElementById('hamburgerButtonHome');
      TombolLogin.innerText = 'Logout';
      navdrawer.setAttribute('hidden', '');
      navigation.forEach((nav) => {
        nav.setAttribute('hidden', '');
      });
      TombolLogin.addEventListener('click', (event) => {
        event.preventDefault();
        TombolLogin.innerText = 'Masuk';
        const navigation = document.querySelectorAll('#navigationDrawerHome .listnav');
        navigation.forEach((nav) => {
          nav.removeAttribute('hidden');
        });
        localStorage.setItem('user', 'login');
        location.assign("#/login");
      })
      modul.addEventListener('click', (event) => {
        TombolLogin.setAttribute('hidden', '');
        navdrawer.removeAttribute('hidden');
        hamburgerHome.setAttribute('hidden', '');
        const logo = document.querySelector('.nav-title img');
        logo.setAttribute('hidden', '');
        const backButton = document.getElementById('back');
        backButton.removeAttribute('hidden');
        location.assign("#/introduction");
      });
      getStarted.addEventListener('click', (event) => {
        TombolLogin.setAttribute('hidden', '');
        navdrawer.removeAttribute('hidden');
        hamburgerHome.setAttribute('hidden', '');
        const logo = document.querySelector('.nav-title img');
        logo.setAttribute('hidden', '');
        const backButton = document.getElementById('back');
        backButton.removeAttribute('hidden');
        location.assign("#/introduction");
      })


    },
  };
  
  export default ELearning;
  