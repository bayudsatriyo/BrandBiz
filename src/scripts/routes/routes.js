import Introduction from '../views/pages/introduction-page';
import Pengenalan from '../views/pages/pengenalan-page';
import LogoBranding from '../views/pages/logo-branding';
import Analisis from '../views/pages/analisis';
import Detail from '../views/pages/detail';

const routes = {
  '/': Introduction, // default page
  '/introduction': Introduction,
  '/pengenalan': Pengenalan,
  '/logo': LogoBranding,
  '/analisis': Analisis,
  '/detail/:id': Detail,
};

export default routes;
