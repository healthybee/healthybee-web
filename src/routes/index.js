// import { Subscriptions } from '@material-ui/icons';
import Loadable from 'react-loadable';
import Loading from '../components/Loading/loading';
import ProgramRegistration from '../views/Event/ProgramRegistration';

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
  Event = Loadable({
    loader: () => import('../views/Event/Event'),
    loading: Loading
  }),
  Privacy = Loadable({
    loader: () => import('../views/Privacy/Privacy'),
    loading: Loading
  }),
  Refund = Loadable({
    loader: () => import('../views/Refund/Refund'),
    loading: Loading
  }),
  Terms = Loadable({
    loader: () => import('../views/Terms/Terms'),
    loading: Loading
  }),
  SubscriptionActivity = Loadable({
    loader: () => import('../views/Subscriptions/Subscriptions'),
    loading: Loading
  }),
  OrderNow = Loadable({
    loader: () => import('../views/OrderNow/OrderNow'),
    loading: Loading
  });

let indexRoutes = [
  { path: '/about-us', name: 'AboutUs', component: AboutUs },
  { path: '/contact-us', name: 'ContactUs', component: ContactUs },
  { path: '/menu', name: 'MenuPage', component: MenuPage },
  { path: '/order-now', name: 'OrderNow', component: OrderNow },
  {
    path: '/program-registration',
    name: 'ProgramRegistration',
    component: ProgramRegistration
  },
  { path: '/fitness-programs', name: 'Event', component: Event },
  { path: '/privacy', name: 'Privacy', component: Privacy },
  { path: '/Refund', name: 'Refund', component: Refund },
  { path: '/terms', name: 'Event', component: Terms },
  {
    path: '/subscribe',
    name: 'Subscriptions',
    component: SubscriptionActivity
  },
  { path: '/', name: 'Components', component: Components }
];

export default indexRoutes;
