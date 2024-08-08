import { NavLink } from "react-router-dom";

export default function SidebarAdmin() {
	return (
		<div className="bg-light-dark">
			<ul className="hidden md:flex justify-around w-1/3 gap-3">
				<li className="hover:text-accent transition duration-150 ease-in-outout">
					<NavLink to="/admin/songs" className="flex py-2 gap-1 mb-1 ">
						<span>Songs</span>
					</NavLink>
				</li>
				<li className="hover:text-accent transition duration-150 ease-in-outout">
					<NavLink to="/admin/artists" className="flex py-2 gap-1 mb-1">
						<span>Artists</span>
					</NavLink>
				</li>
				<li className="hover:text-accent transition duration-150 ease-in-outout">
					<NavLink to="/admin/albums" className="flex py-2 gap-1 mb-1">
						<span>Albums</span>
					</NavLink>
				</li>
				<li className="hover:text-accent transition duration-150 ease-in-outout">
					<NavLink to="/admin/users" className="flex py-2 gap-1 mb-1">
						<span>Users</span>
					</NavLink>
				</li>
				<li className="hover:text-accent transition duration-150 ease-in-outout">
					<NavLink to="/admin/admins" className="flex py-2 gap-1 mb-1">
						<span>Admins</span>
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
