import { Outlet, useLocation } from "react-router-dom";
import SongsContextProvider from "../../../context/SongsContext";
export default function Songs() {
	const location = useLocation();
	console.log(location);
	return (
		<SongsContextProvider>
			<div className="h-screen pt-10">
				<div>
					<h5 className="text-sm text-gray-900 dark:text-white p-3 max-w-screen-xl">
						{location.pathname}
					</h5>
					<Outlet />
				</div>
			</div>
		</SongsContextProvider>
	);
}
