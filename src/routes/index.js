import Components from "../views/Components/Components.js";
import LandingPage from "../views/LandingPage/LandingPage.js";
import ProfilePage from "../views/ProfilePage/ProfilePage.js";
import LoginPage from "../views/LoginPage/LoginPage.js";

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/", name: "Components", component: Components }
];

export default indexRoutes;
