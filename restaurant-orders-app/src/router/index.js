import { Navigate } from "react-router-dom";
import CreateOrder from "../pages/CreateOrder";
import Orders from "../pages/Orders";

export const routes = [
  { path: "/", element: <Navigate to="/CreateOrder" />, exact: true },
  { path: "*", element: <Navigate to="/CreateOrder" />, exact: true },
  { path: "/CreateOrder", element: <CreateOrder />, exact: true },
  { path: "/Orders", element: <Orders />, exact: true },
];
