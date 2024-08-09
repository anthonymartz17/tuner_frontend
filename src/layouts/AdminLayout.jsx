import { Outlet } from "react-router-dom";
import HeaderAdmin from "../components/admin_components/HeaderAdmin";
import AuthContextProvider from "../context/AuthContext";
export default function AdminLayout() {
	return (
		<AuthContextProvider>
			<div>
				<HeaderAdmin />
				<Outlet />
			</div>
		</AuthContextProvider>
	);
}
