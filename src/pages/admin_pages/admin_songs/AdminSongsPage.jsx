import { Outlet, useLocation } from "react-router-dom";
import SongsContextProvider from "../../../context/SongsContext";

export default function AdminSongsPage() {
	const location = useLocation();
	return (
		<SongsContextProvider>
			<div className="h-full  pt-10">
				<div className="m-3">
					<h5 className="text-sm text-gray-900 dark:text-white p-3 max-w-screen-xl">
						{location.pathname}
					</h5>
					<Outlet />
				</div>
			</div>
		</SongsContextProvider>
	);
}
