import React from "react";
import CardMobileArtistAdminComponent from "../../../components/admin_components/admin_artists_components/CardMobileArtistAdminComponent";
import { useArtistsContext } from "../../../context/ArtistsContext";
import { useEffect } from "react";
import TableListArtistAdminComponent from "../../../components/admin_components/admin_artists_components/TableListArtistAdminComponent";
export default function AdminSongsListPage() {
	const { artists, getArtists} = useArtistsContext();

	useEffect(() => {
		if (artists.length === 0) {
			console.log("from component");
			getArtists();
		}
	}, []);
	return (
		<div className=" flex justify-center">
			<ul className="grid gap-3 h-full w-full max-height-75 overflow-y-auto md:hidden px-3">
				{artists.length > 0 ? (
					artists.map((artist) => (
						<CardMobileArtistAdminComponent artist={artist} key={artist.id} />
					))
				) : (
					<p>no songs added</p>
				)}
			</ul>

			<TableListArtistAdminComponent artists={artists} />
		</div>
	);
}
