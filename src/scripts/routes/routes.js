import Introduction from '../views/pages/introduction-page';
import Pengenalan from '../views/pages/pengenalan-page';
import LogoBranding from '../views/pages/logo-branding';
import Analisis from '../views/pages/analisis';
import Detail from '../views/pages/detail';
import Merek from '../views/pages/Merek';
import Kontent from '../views/pages/kontent';
import Strategi from '../views/pages/strategi';
import Evaluasi from '../views/pages/evaluasi';

const routes = {
  '/': Introduction, // default page
  '/introduction': Introduction,
  '/pengenalan': Pengenalan,
  '/logo': LogoBranding,
  '/analisis': Analisis,
  '/merek': Merek,
  '/kontent': Kontent,
  '/strategi': Strategi,
  '/evaluasi': Evaluasi,
  '/detail/:id': Detail,
};

export default routes;
