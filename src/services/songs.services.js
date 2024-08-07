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
