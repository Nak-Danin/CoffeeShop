import { Outlet} from "react-router-dom";
import { Navbar, Footer } from "../main/index";
import ScrollToTop from "../utils/ScrollToTop";
const RootLayout = () => {
  return (
    <div className="w-full h-fit">
      <ScrollToTop/>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
