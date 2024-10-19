import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

export default function PrivateRoute() {

  const user = useAppSelector(state => state.user);
  
  return  user.currentUser ? <Outlet /> : <Navigate to="/login" />;
}
