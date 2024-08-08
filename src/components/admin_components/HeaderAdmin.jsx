import MobileMenuAdmin from "./MobileMenuAdmin";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function HeaderAdmin() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		// <div className="text-light flex justify-between items-center py-3 px-3  z-20 bg-light-dark  ">
		<div className="text-light flex justify-between py-3 px-3 fixed top-0 left-0 right-0 z-20 md:static bg-light-dark ">
			<div className="roboto-bold">Logo</div>
			<span
				onClick={() => setIsOpen(true)}
				className="md:hidden material-symbols-outlined"
			>
				menu
			</span>
			<ul className="hidden md:flex justify-around w-1/3 gap-3">
				<li className="hover:text-accent transition duration-150 ease-in-outout">
					<NavLink
						to="/admin/songs"
						className="flex py-2 gap-1 mb-1 "
						onClick={() => setIsOpen(false)}
					>
						<span>Songs</span>
					</NavLink>
				</li>
				<li className="hover:text-accent transition duration-150 ease-in-outout">
					<NavLink
						to="/admin/artists"
						className="flex py-2 gap-1 mb-1"
						onClick={() => setIsOpen(false)}
					>
						<span>Artists</span>
					</NavLink>
				</li>
				<li className="hover:text-accent transition duration-150 ease-in-outout">
					<NavLink
						to="/admin/albums"
						className="flex py-2 gap-1 mb-1"
						onClick={() => setIsOpen(false)}
					>
						<span>Albums</span>
					</NavLink>
				</li>
				<li className="hover:text-accent transition duration-150 ease-in-outout">
					<NavLink
						to="/admin/users"
						className="flex py-2 gap-1 mb-1"
						onClick={() => setIsOpen(false)}
					>
						<span>Users</span>
					</NavLink>
				</li>
				<li className="hover:text-accent transition duration-150 ease-in-outout">
					<NavLink
						to="/admin/admins"
						className="flex py-2 gap-1 mb-1"
						onClick={() => setIsOpen(false)}
					>
						<span>Admins</span>
					</NavLink>
				</li>
			</ul>
			<div className="hidden md:block">Admin@mail.com</div>
			<MobileMenuAdmin isOpen={isOpen} onSetIsOpen={setIsOpen} />
			<div
				onClick={() => setIsOpen(false)}
				className={`mobile_menu_backdrop ${isOpen ? "open" : ""}`}
			></div>
		</div>
	);
}
