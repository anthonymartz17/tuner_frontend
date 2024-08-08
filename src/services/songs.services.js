const TUNER_API = import.meta.env.VITE_TUNER_API;

export async function fetchSongs() {
	try {
		const res = await fetch(`${TUNER_API}/songs`);
		const songs = await res.json();
		return songs;
	} catch (error) {
		throw error;
	}
}
export async function fetchSongById(id, token) {
	try {
		const res = await fetch(`${TUNER_API}/songs/${id}`, {
			headers: {
				Authorization: "Bearer " + token,
			},
		});
		const songs = await res.json();
		return songs;
	} catch (error) {
		throw error;
	}
}
export async function createSong(payload, token) {
	try {
		const res = await fetch(`${TUNER_API}/songs/`, {
			headers: {
				Authorization: "Bearer " + token,
				"Content-type": "Application/JSON",
			},
			method: "POST",
			body: JSON.stringify(payload),
		});
		const newSong = await res.json();
		return newSong;
	} catch (error) {
		throw error;
	}
}
export async function updateSong(payload, token) {
	try {
		const res = await fetch(`${TUNER_API}/songs/${payload.id}`, {
			headers: {
				Authorization: "Bearer " + token,
				"Content-type": "Application/JSON",
			},
			method: "PUT",
			body: JSON.stringify(payload),
		});
		const updatedSong = await res.json();
		return updatedSong;
	} catch (error) {
		throw error;
	}
}
export async function deleteSong(id, token) {
	try {
		const res = await fetch(`${TUNER_API}/songs/${id}`, {
			headers: {
				Authorization: "Bearer " + token,
			},
			method: "DELETE",
		});
		const deletedSong = await res.json();
		return deletedSong;
	} catch (error) {
		throw error;
	}
}
