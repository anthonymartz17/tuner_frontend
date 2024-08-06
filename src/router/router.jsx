import { createBrowserRouter } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import Notfound from "../pages/Notfound";
import adminRoutes from "./adminRoutes";
import userRoutes from "./userRoutes";
export default createBrowserRouter([
	{
		path: "",
		element: <UserLayout />,
		children: userRoutes,
	},
	{
		path: "/admin",
		element: <AdminLayout />,
		children: adminRoutes,
	},
	{
		path: "*",
		element: <Notfound />,
	},
]);
