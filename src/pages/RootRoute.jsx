import { Outlet, NavLink } from "react-router-dom";

export default function RootRouter() {
	return (
		<div>
			<nav className="hidden bg-light-dark text-light md:flex justify-end gap-3 px-3 py-2 ">
				<NavLink to="/">User UI</NavLink>

				<NavLink to="/admin">Admin UI</NavLink>
			</nav>
			<Outlet />
		</div>
	);
}
