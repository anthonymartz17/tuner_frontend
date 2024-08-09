import { useEffect, useState } from "react";
import SingleArtistAdminComponent from "../../../components/admin_components/admin_artists_components/SingleArtistAdminComponent";
import { useArtistsContext } from "../../../context/ArtistsContext";
import { useParams } from "react-router-dom";
export default function AdminSingleArtistPage() {
	const { artist_id } = useParams();
	
	const { getArtistById } = useArtistsContext();
	const [artist, setArtist] = useState();

	async function setArtistById(id) {
		try {
			const fetchedArtist = await getArtistById(id);

			setArtist(fetchedArtist);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		if (artist_id) {
			setArtistById(artist_id);
		}
	}, [artist_id]);

	return (
		<div>
			<SingleArtistAdminComponent artist={artist} />
		</div>
	);
}
