import { createContext, useContext, useState } from "react";
import {
	fetchArtists,
	fetchArtistById,
	createArtist,
	updateArtist,
	deleteArtist,
} from "../services/artists.services";

const ArtistsContext = createContext({
	artists: [],
	getArtists: () => {},
	getArtistById: () => {},
	createNewArtist: () => {},
	editArtist: () => {},
	removeArtist: () => {},
});

export default function ArtistContextProvider({ children }) {
	const [artists, setArtists] = useState([]);
	

	async function getArtists() {
		
		try {
			const artistsData = await fetchArtists();
			setArtists(artistsData);
		} catch (error) {
			throw error;
		}
	}
	async function getArtistById(id) {
		try {
			const artistData = await fetchArtistById(id);
			return artistData;
		} catch (error) {
			throw error;
		}
	}
	async function createNewArtist(payload, token) {
		try {
			const newArtist = await createArtist(payload, token);
			setArtists((prev) => [newArtist, ...prev]);
			return newArtist;
		} catch (error) {
			throw error;
		}
	}
	async function editArtist(payload, token) {
		try {
			const updatedArtist = await updateArtist(payload, token);
			setArtists((prev) =>
				prev.map((artist) =>
					payload.id === artist.id ? { ...artist, ...updatedArtist } : artist
				)
			);
			return updatedArtist;
		} catch (error) {
			throw error;
		}
	}
	async function removeArtist(id, token) {
		try {
			const deletedArtist = await deleteArtist(id, token);
			setArtists((prev) => prev.filter((artist) => artist.id != id));
			return deletedArtist;
		} catch (error) {
			throw error;
		}
	}

	const contextValue = {
		artists,
		getArtists,
		getArtistById,
		createNewArtist,
		editArtist,
		removeArtist,
	};
	return (
		<ArtistsContext.Provider value={contextValue}>
			{children}
		</ArtistsContext.Provider>
	);
}

export function useArtistsContext() {
	return useContext(ArtistsContext);
}
