import Introduction from '../views/pages/introduction-page';
import Pengenalan from '../views/pages/pengenalan-page';
import LogoBranding from '../views/pages/logo-branding';
import Analisis from '../views/pages/analisis';
import Detail from '../views/pages/detail';
import Merek from '../views/pages/Merek';
import Kontent from '../views/pages/kontent';
import Strategi from '../views/pages/strategi';
import KuisPage from '../views/kuis/kuis';
import Evaluasi from '../views/pages/evaluasi';
import Login from '../views/reg_log/login';

const routes = {
  '/': [Login, ''], // default page
  '/introduction': [Introduction, ''],
  '/pengenalan': [Pengenalan, ''],
  '/logo': [LogoBranding, ''],
  '/analisis': [Analisis, ''],
  '/merek': [Merek, ''],
  '/kontent': [Kontent, ''],
  '/strategi': [Strategi, ''],
  '/evaluasi': [Evaluasi, ''],
  '/kuispengenalan': [KuisPage, 0],
  '/kuisvisualisasi': [KuisPage, 1],
  '/kuiskontent': [KuisPage, 2],
  '/kuisstrategi': [KuisPage, 3],
  '/kuisanalisis': [KuisPage, 4],
  '/detail/:id': [Detail, ''],
};

export default routes;
