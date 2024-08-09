import { createContext, useContext, useState } from "react";
import {
	fetchSongs,
	fetchSongById,
	createSong,
} from "../services/songs.services";
const SongsContext = createContext({
	songs: [],
	getSongs: () => {},
	getSongById: () => {},
	createNewSong: () => {},
});

export default function songsContext({ children }) {
	const [songs, setSongs] = useState([]);
	const [song, setSong] = useState({});

	async function getSongs() {
		try {
			const songsData = await fetchSongs();
			setSongs(songsData);
		} catch (error) {
			throw error;
		}
	}
	async function getSongById(id) {
		try {
			const songData = await fetchSongById(id);
			setSong(songData);
		} catch (error) {
			throw error;
		}
	}
	async function createNewSong(payload) {
		try {
			const newSong = await createSong(payload, token);
			console.log(newSong, "res");
			setSong((prev) => [newSong, ...prev]);
			return newSong;
		} catch (error) {
			throw error;
		}
	}

	const contextValue = {
		songs,
		song,
		getSongs,
		getSongById,
		createNewSong,
	};
	return (
		<SongsContext.Provider value={contextValue}>
			{children}
		</SongsContext.Provider>
	);
}

export function useSongsContext() {
	return useContext(SongsContext);
}
