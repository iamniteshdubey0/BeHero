import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../utils/UserContext";
import Navbar from "../component/global/NavBar/Navbar";
import Footer from "../component/global/Footer";

const PrivateRoutes = () => {
  const { isUserLogged } = useUser();

  if (!isUserLogged) return <Navigate to="/auth" replace />;

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PrivateRoutes;
