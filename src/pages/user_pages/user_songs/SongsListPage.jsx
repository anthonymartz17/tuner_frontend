import { useEffect } from "react";
import { useSongsContext } from "../../../context/SongsContext";
import SongCard from "../../../components/user_components/user_songs_component/SongCard";

export default function SongsListPage() {
	const { songs, getSongs } = useSongsContext();

	useEffect(() => {
		if (songs.length === 0) {
			getSongs();
		}
	}, []);

	return (
		<div className="p-3 max-w-screen-xl max-h-80 overflow-x-auto">
			<ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
				{songs.length > 0 ? (
					songs.map((song) => <SongCard song={song} key={song.id} />)
				) : (
					<p className="text-white">No songs Available</p>
				)}
			</ul>
		</div>
	);
}
