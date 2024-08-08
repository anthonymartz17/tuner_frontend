export function convertSecToMin(seconds) {
	let minutes = Math.floor(seconds / 60);
	let remainingSeconds = seconds % 60;

	return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function formatDate(date) {
	return new Date(date).toLocaleDateString();
}
