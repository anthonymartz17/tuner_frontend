import React, { useEffect, useState } from "react";
import { useSongsContext } from "../../../context/SongsContext";
import { useParams } from "react-router-dom";

export default function SongFormAdminComponent() {
	const { song_id } = useParams();
	const { song, createNewSong, getSongById } = useSongsContext();
	const [songData, setSongData] = useState({
		name: "",
		artist: "",
		album: "",
		duration: "",
		cover_img: "",
	});

	function handleInputChange(e) {
		const { name, value } = e.target;
		setSongData((prev) => ({ ...prev, [name]: value }));
	}
	async function createSong() {
		try {
			const newSong = await createNewSong(songData);
		} catch (error) {
			throw error;
		}
	}

	useEffect(() => {
		if (song_id) {
			getSongById(song_id);
			setSongData(song);
		}
	}, [song_id, song]);
	return (
		<form className="max-w-md mx-auto">
			<div className="relative z-0 w-full mb-5 group">
				<input
					type="text"
					name="name"
					value={songData.name}
					onChange={handleInputChange}
					id="song_name"
					className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					htmlFor="song_name"
					className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Song name
				</label>
			</div>
			<div className="relative z-0 w-full mb-5 group">
				<input
					type="text"
					name="artist"
					id="artist"
					value={songData.artist}
					onChange={handleInputChange}
					className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					htmlFor="artist"
					className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Artist
				</label>
			</div>
			<div className="relative z-0 w-full mb-5 group">
				<input
					type="text"
					name="album"
					id="album"
					value={songData.album}
					onChange={handleInputChange}
					className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					htmlFor="floating_password"
					className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Album
				</label>
			</div>
			<div className="relative z-0 w-full mb-5 group">
				<label
					htmlFor="duration"
					className="block mb-2 text-sm  text-gray-900 dark:text-white"
				>
					Duration (mm:ss)
				</label>
				<input
					type="text"
					name="duration"
					id="duration"
					value={songData.duration}
					onChange={handleInputChange}
					pattern="^[0-5]?[0-9]:[0-5][0-9]$"
					className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder="00:00"
					required
				/>
			</div>
			<div className="relative z-0 w-full mb-5 group">
				<input
					type="text"
					name="cover_img"
					id="cover_img"
					value={songData.cover_img}
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
			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Submit
			</button>
		</form>
	);
}
