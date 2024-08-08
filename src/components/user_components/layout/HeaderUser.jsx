import MobileMenuUser from "./MobileMenuUser";
import { useState } from "react";
export default function HeaderUser() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="text-light flex justify-between py-3 px-3 fixed top-0 left-0 right-0 z-20 md:static bg-light-dark ">
			<div className="roboto-bold">Logo</div>
			<span
				onClick={() => setIsOpen(true)}
				className="md:hidden material-symbols-outlined"
			>
				menu
			</span>
			<div className="hidden md:block ">link link</div>
			<div className="hidden md:block">Admin@mail.com</div>
			<MobileMenuUser isOpen={isOpen} onSetIsOpen={setIsOpen} />
			<div
				onClick={() => setIsOpen(false)}
				className={`mobile_menu_backdrop ${isOpen ? "open" : ""}`}
			></div>
		</div>
	);
}
