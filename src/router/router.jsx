import { createBrowserRouter } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import Notfound from "../pages/Notfound";

export default createBrowserRouter([
	{
		path: "",
		element: <UserLayout />,
		children: [],
	},
	{
		path: "/admin",
		element: <AdminLayout />,
		children: [],
	},
	{
		path: "*",
		element: <Notfound />,
		children: [],
	},
]);
