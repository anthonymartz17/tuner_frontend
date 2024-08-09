import { Outlet, useLocation } from "react-router-dom";

export default function IndextAuthUserPage() {
	const location = useLocation();
	return (
		<div className="h-screen pt-20">
			<h5 className="text-sm text-gray-900 dark:text-white p-3 max-w-screen-xl">
				{location.pathname}
			</h5>
			<Outlet />
		</div>
	);
}

