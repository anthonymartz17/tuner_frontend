import { Outlet } from "react-router-dom";
import HeaderUser from "../components/user_components/layout/HeaderUser";

export default function UserLayout() {
	return (
		<div>
			<HeaderUser />
			<Outlet />
		</div>
	);
}
