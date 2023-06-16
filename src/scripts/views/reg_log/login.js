import LoginPost from "../../data/loginPost";
import userAkun from "../../data/users";

async function generateLogin(user) {
    const userLogin = await LoginPost.post(user);
    userAkun.splice(0, userAkun.length, userLogin);
    console.log(userAkun);
    console.log(userLogin)
    if(userLogin == null){
        alert('email atau password yang anda masukan salah');
    }else{
    localStorage.setItem("user", JSON.stringify(userAkun));
    location.assign("#/introduction");
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
        hamburger.removeAttribute('hidden');
        generateLogin(user);
        formLogin.reset();
      })
    },
  };
  
  export default Login ;
  