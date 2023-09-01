import useAuthState from "../hooks/useAuthState";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLogin } = useAuthState();
  const { pathname } = useLocation();
  return isLogin ? children : <Navigate to="/login" replace state={pathname} />;
}
