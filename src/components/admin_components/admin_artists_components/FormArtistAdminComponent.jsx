import React, { useEffect, useState } from "react";
import { useArtistsContext } from "../../../context/ArtistsContext";
import { useParams, useNavigate } from "react-router-dom";

export default function FormArtistAdminComponent() {
	const navigate = useNavigate();
	const { artist_id } = useParams();
	const { getArtistById, createNewArtist, editArtist } = useArtistsContext();
	const [artistData, setArtistData] = useState({
		name: "",
		genre: "",
		bio: "",
		cover_img: "",
	});

	function handleInputChange(e) {
		e.preventDefault();

		const { name, value } = e.target;
		console.log(`${name} : ${value}`);
		setArtistData((prev) => ({ ...prev, [name]: value }));
	}
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			if (artist_id) {
				await editArtist(artistData, "token123");
				navigate(`/admin/artists/${artist_id}`);
			} else {
				console.log(artistData,'artistData')
				await createNewArtist(artistData, "token123");
		
				navigate("/admin/artists");
			}
			setArtistData({ name: "", genre: "", bio: "", cover_img: "" });
		} catch (error) {
			console.error("Error:", error);
		}
	}

	async function setArtistById(id) {
		try {
			const fetchedArtist = await getArtistById(id);
			setArtistData(fetchedArtist);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		if (artist_id) {
			setArtistById(artist_id);
		}
	}, [artist_id]);

	return (
		<form className="max-w-md mx-auto" onSubmit={handleSubmit}>
			<div className="relative z-0 w-full mb-5 group">
				<input
					type="text"
					name="name"
					value={artistData.name}
					onChange={handleInputChange}
					id="artist_name"
					className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					htmlFor="artist_name"
					className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Artist name
				</label>
			</div>
			<div className="relative z-0 w-full mb-5 group">
				<input
					type="text"
					name="genre"
					id="genre"
					value={artistData.genre}
					onChange={handleInputChange}
					className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					htmlFor="genre"
					className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Genre
				</label>
			</div>
			<div className="relative z-0 w-full mb-5 group">
				<input
					type="text"
					name="cover_img"
					id="cover_img"
					value={artistData.cover_img}
					onChange={handleInputChange}
					className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					htmlFor="floating_password"
					className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Cover Image URL
				</label>
			</div>
			<div className="relative z-0 w-full mb-5 group">
				<label
					htmlFor="message"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Bio Description
				</label>
				<textarea
					id="bio"
					name="bio"
					rows="4"
					value={artistData.bio}
					onChange={handleInputChange}
					className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Write your thoughts here..."
				></textarea>
			</div>

			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				{artist_id ? "Update" : "Create"}
			</button>
		</form>
	);
}
