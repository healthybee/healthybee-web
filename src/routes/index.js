import Components from "../views/Components/Components.js";
import LandingPage from "../views/LandingPage/LandingPage.js";
import ProfilePage from "../views/ProfilePage/ProfilePage.js";
import AboutUs from "../views/AboutUs/AboutUs.js"
import ContactUs from "../views/ContactUs/ContactUs.js";
import MenuPage from "../views/MenuPage/MenuPage.js";

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/about-us", name: "AboutUs", component: AboutUs },
  { path: "/contact-us", name: "ContactUs", component: ContactUs },
  { path: "/menu", name: "MenuPage", component: MenuPage },
  { path: "/", name: "Components", component: Components }
];

export default indexRoutes;
