import Loadable from 'react-loadable';
import Loading from '../components/Loading/loading';

const Components = Loadable({
    loader: () => import('../views/Components/Components.js'),
    loading: Loading
  }),
  AboutUs = Loadable({
    loader: () => import('../views/AboutUs/AboutUs.js'),
    loading: Loading
  }),
  ContactUs = Loadable({
    loader: () => import('../views/ContactUs/ContactUs.js'),
    loading: Loading
  }),
  MenuPage = Loadable({
    loader: () => import('../views/MenuPage/MenuPage.js'),
    loading: Loading
  }),
  OrderNow = Loadable({
    loader: () => import('../views/OrderNow/OrderNow'),
    loading: Loading
  }),
  Subscription = Loadable({
    loader: () => import('../views/Subscription/Subscription'),
    loading: Loading
  });

let indexRoutes = [
  { path: '/about-us', name: 'AboutUs', component: AboutUs },
  { path: '/contact-us', name: 'ContactUs', component: ContactUs },
  { path: '/menu', name: 'MenuPage', component: MenuPage },
  { path: '/order-now', name: 'OrderNow', component: OrderNow },
  { path: '/subscription', name: 'Subscription', component: Subscription },
  { path: '/', name: 'Components', component: Components }
];

export default indexRoutes;
