import React from "react";
import SongCardMobileAdmin from "../../../components/admin_components/admin_song_components/SongCardMobileAdmin";
import { useSongsContext } from "../../../context/SongsContext";
import { useEffect } from "react";

export default function AdminSongsListPage() {
	const { songs, getSongs } = useSongsContext();

	useEffect(() => {
		if (songs.length === 0) {
			getSongs();
		}
	}, []);
	return (
		<div>
			<ul className="grid gap-3 h-full max-height-75 overflow-y-auto">
				{songs.length > 0 ? (
					songs.map((song) => <SongCardMobileAdmin song={song} key={song.id} />)
				) : (
					<p>no songs added</p>
				)}
			</ul>
		</div>
	);
}
