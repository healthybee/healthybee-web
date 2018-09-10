import Components from '../views/Components/Components.js';
import AboutUs from '../views/AboutUs/AboutUs.js';
import ContactUs from '../views/ContactUs/ContactUs.js';
import MenuPage from '../views/MenuPage/MenuPage.js';
import OrderNow from '../views/OrderNow/OrderNow';

var indexRoutes = [
  { path: '/about-us', name: 'AboutUs', component: AboutUs },
  { path: '/contact-us', name: 'ContactUs', component: ContactUs },
  { path: '/menu', name: 'MenuPage', component: MenuPage },
  { path: '/order-now', name: 'OrderNow', component: OrderNow },
  { path: '/', name: 'Components', component: Components }
];

export default indexRoutes;
