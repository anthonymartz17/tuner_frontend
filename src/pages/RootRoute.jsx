import { Outlet, NavLink } from "react-router-dom";

export default function RootRouter() {
	function setActiveRoute({ isActive }) {
		console.log(isActive);
		return isActive ? "text-accent" : "text-light";
	}
	return (
		<div className="flex flex-col items-center">
			<nav className="hidden w-full  text-light md:flex justify-end gap-3 px-3 py-2 max-w-7xl">
				<NavLink className={setActiveRoute} to="/">
					User UI
				</NavLink>
				<NavLink className={setActiveRoute} to="/admin">
					Admin UI
				</NavLink>
			</nav>
			<div className=" w-full max-w-7xl">
				<Outlet />
			</div>
		</div>
	);
}
