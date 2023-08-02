import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class FooterContainer extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `
      <div class="footer-container">
      <div class="footer-left-side">
        <div class="footer-logo">
          <img class="lazyload" data-src="https://i.postimg.cc/g2XSszKw/Brand-Biz-removebg.png" alt="" />
        </div>
        <div class="footer-sosmed">
          <li>
            <a href="#"><img class="lazyload" data-src="https://i.postimg.cc/vTkdDPzD/TikTok.png" alt="" /></a>
          </li>
          <li>
            <a href="#"><img class="lazyload" data-src="https://i.postimg.cc/hP1HktFf/Instagram.png" alt="" /></a>
          </li>
          <li>
            <a href="#"><img class="lazyload" data-src="https://i.postimg.cc/1zkCgkxk/Linkedin.png" alt="" /></a>
          </li>
          <li>
            <a href="#"><img class="lazyload" data-src="https://i.postimg.cc/6qYfhSS5/Twitter.png" alt="" /></a>
          </li>
          <li>
            <a href="#"><img class="lazyload" data-src="https://i.postimg.cc/Y2b6Z5nt/YouTube.png" alt="" /></a>
          </li>
        </div>
      </div>
      <div class="footer-right-side">
        <div class="footer-links">
          <div class="links">
            <h6>Brandbiz.id</h6>
            <li><a href="#">Tentang</a></li>
            <li><a href="#">Karir</a></li>
            <li><a href="#">Kerjasama</a></li>
            <li><a href="#">Blog</a></li>
          </div>
          <div class="links">
            <h6>Produk</h6>
            <li><a href="#">E-Learning</a></li>
            <li><a href="#">Program</a></li>
            <li><a href="#">Mentoring</a></li>
            <li><a href="#">Corporate Service</a></li>
          </div>
        </div>
      </div>
    </div>`;
    }
  }
   
  customElements.define('footer-container', FooterContainer);