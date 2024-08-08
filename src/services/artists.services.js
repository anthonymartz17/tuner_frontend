const TUNER_API = import.meta.env.VITE_TUNER_API;

export async function fetchArtists() {
	try {
		const res = await fetch(`${TUNER_API}/artists`);
		const artists = await res.json();
		return artists;
	} catch (error) {
		throw error;
	}
}
export async function fetchArtistById(id) {
	try {
		const res = await fetch(`${TUNER_API}/artists/${id}`);
		const artist = await res.json();
		return artist;
	} catch (error) {
		throw error;
	}
}
export async function createArtist(payload, token) {
	try {
		const res = await fetch(`${TUNER_API}/artists/`, {
			headers: {
				Authorization: "Bearer " + token,
				"Content-type": "Application/JSON",
			},
			method: "POST",
			body: JSON.stringify(payload),
		});
		const newArtist = await res.json();
		return newArtist;
	} catch (error) {
		throw error;
	}
}
export async function updateArtist(payload, token) {
	try {
		const res = await fetch(`${TUNER_API}/artists/${payload.id}`, {
			headers: {
				Authorization: "Bearer " + token,
				"Content-type": "Application/JSON",
			},
			method: "PUT",
			body: JSON.stringify(payload),
		});
		const updatedArtist = await res.json();
		return updatedArtist;
	} catch (error) {
		throw error;
	}
}
export async function deleteArtist(id, token) {
	try {
		const res = await fetch(`${TUNER_API}/artists/${id}`, {
			headers: {
				Authorization: "Bearer " + token,
			},
			method: "DELETE",
		});
		const deletedArtist = await res.json();
		return deletedArtist;
	} catch (error) {
		throw error;
	}
}
