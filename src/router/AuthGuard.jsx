import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../app/hooks/useAuth";

export function AuthGuard({ isPrivate }) {
  const { loggedIn } = useAuth();

  if(!loggedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if(loggedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}