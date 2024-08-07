import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function MobileMenuUser({ isOpen, onSetIsOpen }) {
	function setActiveRoute(isActive) {
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
					<NavLink to="/admin" onClick={() => onSetIsOpen(false)}>
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
			<ul className="mt-10 px-2">
				<li>
					<NavLink
						to="/songs"
						className="flex py-2 gap-1 mb-1"
						onClick={() => onSetIsOpen(false)}
					>
						<span className="material-symbols-outlined">genres</span>
						<span>Songs</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/artists"
						className="flex py-2 gap-1 mb-1"
						onClick={() => onSetIsOpen(false)}
					>
						<span className="material-symbols-outlined">artist</span>
						<span>Artists</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/albums"
						className="flex py-2 gap-1 mb-1"
						onClick={() => onSetIsOpen(false)}
					>
						<span className="material-symbols-outlined">album</span>
						<span>Albums</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/playlists"
						className="flex py-2 gap-1 mb-1"
						onClick={() => onSetIsOpen(false)}
					>
						<span className="material-symbols-outlined">playlist_play</span>
						<span>Playlists</span>
					</NavLink>
				</li>
			</ul>
			{/* <div className="bg-slate-500 h-full flex flex-col justify-end">
				<div className="flex  bg-red-600 h-fit">
					<span class="material-symbols-outlined">person</span>
					<span>user@email.com</span>
				</div>
			</div> */}
		</div>
	);
}
