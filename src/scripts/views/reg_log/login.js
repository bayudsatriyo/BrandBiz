import LoginPost from "../../data/loginPost";

async function generateLogin(user) {
    const userLogin = await LoginPost.post(user);
    console.log(userLogin)
    if(userLogin == null){
        alert('email atau password yang anda masukan salah');
    }else{
    const TombolLogin = document.getElementById('signInHome');
    TombolLogin.removeAttribute('hidden');
    TombolLogin.innerText = 'Logout';
    localStorage.setItem("user", JSON.stringify(userLogin));
    location.assign("#/learning");
    }
};

const Login = {
    async render() {
      return `
      <div class="container">
      <div class="login-container">
      <div class="login-header">
          <h2>Login</h2>
      </div>
      <div class="login-main">
          <form id="form-login">
              <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                  <label for="password">Password:</label>
                  <input type="password" id="password" name="password" required>
              </div>
              <div class="form-group">
              <span>Don't have an account?<a href="#/signin" id="signin"> Sign up<span>
              </div>
              <div class="form-group">
                  <button class="btn-submit">Login</button>
              </div>
          </form>
      </div>
</div>
</div>
        `;
    },
  
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
      const formLogin = document.getElementById('form-login');
      const hamburger = document.getElementById('hamburgerButton');
      const signIn = document.getElementById('signin');
      const home = document.getElementById('home');
      const TombolLogin = document.getElementById('signInHome');
      TombolLogin.setAttribute('hidden', '');
      hamburger.setAttribute('hidden', '');
      formLogin.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const user = {
            email: email.value,
            password: password.value
        };
        console.log(user);
        generateLogin(user);
      })
      signIn.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.setItem('user', 'register');
        location.assign("#/signin");
      });
      home.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.setItem('user', 'home');
        TombolLogin.removeAttribute('hidden');
        location.assign("#/");
      })
    },
  };
  
  export default Login ;
  