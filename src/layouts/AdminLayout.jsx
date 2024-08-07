import { Outlet } from "react-router-dom";
import HeaderAdmin from "../components/admin_components/HeaderAdmin"
export default function AdminLayout() {
	return (
		<div>
			<HeaderAdmin />
			<Outlet />
		</div>
	);
}
