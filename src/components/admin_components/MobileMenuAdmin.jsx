import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export default function MobileMenuAdmin({ isOpen, onSetIsOpen }) {
	const { currentUser } = useAuth();
	function setActiveRoute({ isActive }) {
		return isActive ? "text-accent" : "text-light";
	}

	return (
		<div
			className={`bg-dark fixed top-0 right-0  h-full duration-300 z-10 w-3/4 transform ${
				isOpen ? "translate-x-0 shadow-left" : "translate-x-full"
			} transition-transform`}
		>
			<div className="flex justify-between px-2 py-4">
				<div className="flex gap-3">
					<NavLink
						to="/"
						onClick={() => onSetIsOpen(false)}
						className={setActiveRoute}
					>
						User UI
					</NavLink>
					<NavLink
						className={setActiveRoute}
						to={currentUser ? "/admin" : "/admin/auth"}
						onClick={() => onSetIsOpen(false)}
					>
						Admin UI
					</NavLink>
				</div>
				<span
					className="material-symbols-outlined cursor-pointer"
					onClick={() => onSetIsOpen(false)}
				>
					close
				</span>
			</div>
			{currentUser ? (
				<ul className="mt-10 px-2">
					<li>
						<NavLink
							to="/admin/songs"
							className="flex py-2 gap-1 mb-1"
							onClick={() => onSetIsOpen(false)}
						>
							<span className="material-symbols-outlined">genres</span>
							<span>Songs</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/admin/artists"
							className="flex py-2 gap-1 mb-1"
							onClick={() => onSetIsOpen(false)}
						>
							<span className="material-symbols-outlined">artist</span>
							<span>Artists</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/admin/albums"
							className="flex py-2 gap-1 mb-1"
							onClick={() => onSetIsOpen(false)}
						>
							<span className="material-symbols-outlined">album</span>
							<span>Albums</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/admin/users"
							className="flex py-2 gap-1 mb-1"
							onClick={() => onSetIsOpen(false)}
						>
							<span className="material-symbols-outlined">group</span>
							<span>Users</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/admin/admins"
							className="flex py-2 gap-1 mb-1"
							onClick={() => onSetIsOpen(false)}
						>
							<span className="material-symbols-outlined">shield_person</span>
							<span>Admins</span>
						</NavLink>
					</li>
				</ul>
			) : (
				<div className="text-center mt-10 px-2">
					<NavLink to="/admin/auth">
						<button
							onClick={() => onSetIsOpen(false)}
							type="button"
							className="py-2.5 w-2/3 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
						>
							Login
						</button>
					</NavLink>
				</div>
			)}
		</div>
	);
}
