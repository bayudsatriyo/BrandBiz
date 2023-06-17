const DrawerInitiator = {
  init({ button, drawer, content, drawerhome, buttonhome }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    buttonhome.addEventListener('click', (event) => {
      this._toggleDrawerhome(event, drawerhome);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
      this._closeDrawerhome(event, drawerhome);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _toggleDrawerhome(event, drawerhome) {
    event.stopPropagation();
    drawerhome.classList.toggle('active');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _closeDrawerhome(event, drawerhome) {
    event.stopPropagation();
    drawerhome.classList.remove('active');
  },
};

export default DrawerInitiator;
