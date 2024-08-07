import { Link } from "react-router-dom";
export default function SongCard({ song }) {
	return (
		<Link to={`${song.id}`}>
			<li className="w-full rounded-lg">
				<img
					className="rounded-t-lg w-full h-24 lg:h-48 object-cover"
					src={song.cover_img}
					alt={`cover image of song ${song.name}`}
				/>
				<div className="pt-1">
					<h5 className="text-l font-bold text-gray-900 dark:text-white truncate">
						{song.name}
					</h5>
					<p className="text-gray-700 dark:text-gray-400 truncate">
						{song.artist}
					</p>
				</div>
			</li>
		</Link>
	);
}
