import { Outlet, useLocation } from "react-router-dom";
import ArtistContextProvider from "../../../context/ArtistsContext";
export default function AdminArtistsPage() {
	const location = useLocation();
	return (
		<ArtistContextProvider>
			<div className="h-full  pt-10 px-3">
				<div className="m-3">
					<h5 className="text-sm text-gray-900 dark:text-white py-3 max-w-screen-xl">
						{location.pathname}
					</h5>
					<Outlet />
				</div>
			</div>
		</ArtistContextProvider>
	);
}
