import { Navigate, Outlet } from "react-router-dom";
import { useGetUser } from "../../services/hooks";
import { cookie } from "../../services/hooks";
import Loading from "../common/Loading/Loading";

export default function PrivateRoute() {
  const token = cookie.get("userToken");
  const { data: user, isLoading, isError } = useGetUser();

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !token) {
    return <Navigate to="/login" />;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
}