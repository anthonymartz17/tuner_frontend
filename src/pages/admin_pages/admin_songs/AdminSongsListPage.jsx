import React from "react";
import SongCardMobileAdmin from "../../../components/admin_components/admin_song_components/SongCardMobileAdmin";
import { useSongsContext } from "../../../context/SongsContext";
import { useEffect } from "react";
import SongTableListAdmin from "../../../components/admin_components/admin_song_components/SongTableListAdmin";
export default function AdminSongsListPage() {
	const { songs, getSongs } = useSongsContext();

	useEffect(() => {
		if (songs.length === 0) {
			getSongs();
		}
	}, []);
	return (
		<div className=" flex justify-center">
			<ul className="grid gap-3 h-full max-height-75 overflow-y-auto md:hidden">
				{songs.length > 0 ? (
					songs.map((song) => <SongCardMobileAdmin song={song} key={song.id} />)
				) : (
					<p>no songs added</p>
				)}
			</ul>
			<div className="max-w-screen-md w-full">
				<SongTableListAdmin songs={songs} />
			</div>
		</div>
	);
}
