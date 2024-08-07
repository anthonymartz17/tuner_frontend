import { createContext, useContext, useState } from "react";
import { fetchSongs } from "../services/songs.services";
const SongsContext = createContext({
	songs: [],
	getSongs: () => {},
});

export default function songsContext({ children }) {
	const [songs, setSongs] = useState([]);

	async function getSongs() {
		try {
			const songList = await fetchSongs();
			setSongs(songList);
		} catch (error) {
			throw error;
		}
	}

	const contextValue = {
		songs,
		getSongs,
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
