import React, { useEffect } from "react";
import AdminSingleSongComponent from "../../../components/admin_components/admin_song_components/AdminSingleSongComponent";
import { useSongsContext } from "../../../context/SongsContext";
import { useParams } from "react-router-dom";
export default function AdminSingleSongPage() {
	const { song_id } = useParams();
	const { song, getSongById } = useSongsContext();

	useEffect(() => {
		getSongById(song_id);
	}, [song_id]);

	return (
		<div>
			<AdminSingleSongComponent song={song} />
		</div>
	);
}
