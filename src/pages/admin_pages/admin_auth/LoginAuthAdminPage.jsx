import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function LoginAuthAdminPage() {
	const navigate = useNavigate();
	const { login } = useAuth();
	const [adminLogin, setAdminLogin] = useState({
		email: "",
		password: "",
	});

	function handleInputChange(e) {
		const value = e.target.value;
		setAdminLogin({ ...adminLogin, [e.target.id]: e.target.value });
	}

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const response = await login(adminLogin.email, adminLogin.password);

			setAdminLogin({});
			navigate("/admin/songs");
		} catch (error) {
			console.log(error);
		} finally {
			// setIsLoading(false);
		}
	}

	return (
		<section className="">
			<h3 className=" text-center ">Welcome back!</h3>

			<form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
				<div className="mb-5">
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						value={adminLogin.email}
						onChange={handleInputChange}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="name@flowbite.com"
						required
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Your password
					</label>
					<input
						type="password"
						id="password"
						value={adminLogin.password}
						onChange={handleInputChange}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
					/>
				</div>

				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Log in
				</button>
			</form>
			<div className="justify-center mt-4 flex gap-4">
				<Link to="/auth/forgot" className="underline">
					Forgot Password?
				</Link>
				<Link to="signup" className=" text-accent underline">
					Create an account
				</Link>
			</div>
		</section>
	);
}
