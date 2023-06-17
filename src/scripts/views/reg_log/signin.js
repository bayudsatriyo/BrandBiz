import signInPost from "../../data/signinPost";

async function generateSignin(user) {
    const userSignin = await signInPost.post(user);
    console.log(userSignin)
    if(userSignin == null){
        alert('isi data dengan format yang sesuai');
    }else{
    alert(`berhasil membuat akun, selamat datang ${userSignin.nama}`);
    localStorage.setItem('user', 'login');
    location.assign("#/login");
    }
};

const signIn = {
    async render() {
      return `
      <div class="container">
      <div class="signin-container">
      <div class="signin-header">
      <h2>Create Account</h2>
      </div>
      <div class="signin-main">
      <form id="signIn">
        <div class="form-group">
        <label for="username" class="inputan">Username:</label>
        <input type="text" id="username" name="username" required>
        </div>

        <div class="form-group">
        <label for="email" class="inputan">Email:</label>
        <input type="email" id="email" name="email" required>
        </div>
        
        <div class="form-group">
        <label for="whatsapp" class="inputan">No Whatsapp:</label>
        <input type="tel" id="whatsapp" name="whatsapp" pattern="[0-9]{10,14}" required>
        </div>
        <div class="form-group">
        <label for="jenis_usaha" class="inputan">Jenis Usaha:</label>
        <input type="text" id="jenis_usaha" name="jenis_usaha" required>
        </div>
        <div class="form-group">
        <label for="password" class="inputan">Password:</label>
        <div class="inputPassword">
        <input type="password" id="password" name="password" required>
        <button type="button" id="showPassword">Show</button>
        </div>
        </div>
        <div class="form-group">
        <button type="submit" class="btn-submit">Create Account</button>
        </div>
      </form>
  
      <p>Already have an account? <a href="#/" id="login">Log in</a></p>
    </div>
    </div>
    </div>
        `;
    },
  
    async afterRender(register) {
      // Fungsi ini akan dipanggil setelah render()
      const LoginButton = document.getElementById('login');
      const formSignIn = document.getElementById('signIn');
      const hamburger = document.getElementById('hamburgerButton');
      const emailValue = document.getElementById('email');
      const namaValue = document.getElementById('username');
      const passwordValue = document.getElementById('password');
      const noWaValue = document.getElementById('whatsapp');
      const jenisUsahaValue = document.getElementById('jenis_usaha');
      const showPass = document.getElementById('showPassword');
      const home = document.getElementById('home');
      const TombolLogin = document.getElementById('signInHome');
      hamburger.setAttribute('hidden', '');
      TombolLogin.removeAttribute('hidden');
      LoginButton.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.setItem('user', 'login');
        location.assign("#/login");
      });
      noWaValue.addEventListener('input', () => {
        noWaValue.setCustomValidity("");
        if (!noWaValue.checkValidity()) {
            noWaValue.setCustomValidity("Harus berisi 10-14 digit angka");
        }
      })
      showPass.addEventListener('click', (event) => {
        if (passwordValue.type === "password") {
            passwordValue.type = "text";
            showPass.textContent = "Hide";
          } else {
            passwordValue.type = "password";
            showPass.textContent = "Show";
          }
      })
      formSignIn.addEventListener('submit', (event) => {
        event.preventDefault();
        const user = {
            email: emailValue.value,
            nama: namaValue.value,
            password: passwordValue.value,
            nomorWA: noWaValue.value,
            jenis_usaha: jenisUsahaValue.value
        };
        generateSignin(user);
        formSignIn.reset();
      })
      home.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.removeItem('user');
        location.assign("#/");
      })
    },
  };
  
  export default signIn ;
  