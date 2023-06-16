import TestimonyDbSource from '../../data/testimonydb-source';
import { createTestimonyItemTemplate } from '../templates/template-creator';

function getRandomTestimonies(testimonies) {
  const shuffledTestimonies = testimonies.sort(() => 0.5 - Math.random());
  return shuffledTestimonies.slice(0, 3);
}

const Homepage = {
  async render() {
    return `
    <section class="headline">
      <div class="headline-title">
        <h1>
          SELAMAT DATANG DI <span class="title-span">BRANDBIZ</span> PLATFORM
          STRATEGI <span class="title-span">BISNIS</span> UNTUK
          <span class="title-span">SUKSES</span> ANDA
        </h1>
        <p>
          "Ketika Anda berbisnis, tidak ada kegagalan, hanya pelajaran
          berharga." - Richard Branson
        </p>
      </div>
      <div class="headline-image">
        <img src="./6685-removebg-preview.png" alt="" />
      </div>
    </section>
    <section class="superior">
      <div class="superior-list">
        <div class="superior-item">
          <img src="./item/Super 1.png" alt="" />
          <div class="superior-content">
            <h4 class="superior-title">Belajar Secara Online</h4>
            <p class="superior-description">
              Belajar online melalui BrandBiz memberikan fleksibilitas akses
              dan waktu.
            </p>
          </div>
        </div>
        <div class="superior-item">
          <img src="./item/Super 1.png" alt="" />
          <div class="superior-content">
            <h4 class="superior-title">User friendly</h4>
            <p class="superior-description">
              
            </p>
          </div>
        </div>
        <div class="superior-item">
          <img src="./item/Super 1.png" alt="" />
          <div class="superior-content">
            <h4 class="superior-title">Belajar Secara Online</h4>
            <p class="superior-description">
              Belajar online melalui BrandBiz memberikan fleksibilitas akses
              dan waktu.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="about-container">
        <div class="about-image">
          <img src="./jose-vazquez-Q5RBHz9cu1A-unsplash.jpg" alt="" />
        </div>
        <div class="about-content">
          <h2 class="about-title">About</h2>
          <h1 class="about-title-second">
            Brand<span class="about-span">biz</span>
          </h1>
          <p class="about-description">
            BrandBiz adalah sebuah platform pembelajaran daring yang
            didedikasikan untuk memberikan strategi dan pengetahuan bisnis
            kepada pemilik bisnis kecil. Platform ini dirancang untuk membantu
            pengguna mengembangkan keterampilan bisnis mereka, memperluas
            wawasan, dan mengoptimalkan potensi pertumbuhan bisnis.
          </p>
          <button id="learnMore">Learn More</button>
        </div>
      </div>
    </section>
    <section class="offering">
      <div class="offering-title">
        <h3>Kenapa BrandBiz Berbeda</h3>
        <p>
          “Berkarya Bersama BrandBiz: Mengembangkan Bisnis Anda melalui
          Branding yang Efektif"
        </p>
      </div>
      <div class="offering-content">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is
                the first item's accordion body.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is
                the second item's accordion body. Let's imagine this being
                filled with some actual content.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is
                the third item's accordion body. Nothing more exciting
                happening here in terms of content, but just filling up the
                space to make it look, at least at first glance, a bit more
                representative of how this would look in a real-world
                application.
              </div>
            </div>
          </div>
        </div>
        <div class="offering-image">
          <img src="./5031659-removebg-preview.png" alt="" />
        </div>
      </div>
    </section>
    <section class="testimony">
      <div class="testimony-container">
        <div class="testimony-title">
          <p class="title">TESTIMONI</p>
          <h1 class="testimony-sub-title">
            Cerita Pengguna, Tutor, dan Mitra
          </h1>
          <p class="testimony-description">
            Bersama para top 1% mentor di bidangnya, BrandBiz membantu jutaan
            pengguna dan ratusan mitra dalam mengembangkan skill
          </p>
        </div>
        <div id="testimonyList" class="testimony-list"></div>
      </div>
    </section>       
    `;
  },

  async afterRender() {
    const testimonies = await TestimonyDbSource.testimonyUsers();
    const testimonyContainer = document.querySelector('#testimonyList');
    const randomTestimonies = getRandomTestimonies(testimonies);
    testimonyContainer.innerHTML = '';

    randomTestimonies.forEach((testimony) => {
      testimonyContainer.innerHTML += createTestimonyItemTemplate(testimony);
    });
  },
};

export default Homepage;
