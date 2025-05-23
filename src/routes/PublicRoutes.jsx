import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../utils/UserContext";

const PublicRoutes = () => {
  const { isUserLogged } = useUser();

  // If already logged in, redirect to home
  if (isUserLogged) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default PublicRoutes;
