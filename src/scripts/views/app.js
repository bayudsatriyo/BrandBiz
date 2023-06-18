import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parse';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content, drawerhome, buttonhome }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._drawerhome = drawerhome;
    this._buttonhome = buttonhome;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      drawerhome: this._drawerhome,
      buttonhome: this._buttonhome,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    let checksession = localStorage.getItem("user");
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    if(!checksession){
      location.assign("#/");
      this._content.innerHTML = await page[0].render();
      await page[0].afterRender(); 
    }else if(checksession == 'news'){
      location.assign("#/news");
      this._content.innerHTML = await page[0].render();
      await page[0].afterRender();
    }else if(checksession == 'register'){
      location.assign("#/signin");
      this._content.innerHTML = await page[0].render();
      await page[0].afterRender();
    }else if(checksession == 'login'){
      location.assign("#/login");
      this._content.innerHTML = await page[0].render();
      await page[0].afterRender();
    }else{
      this._content.innerHTML = await page[0].render();
      if(page[1] === ''){
        await page[0].afterRender(); 
      }else{
        await page[0].afterRender(page[1]); 
      }
    }
  }
}

export default App;
