import { Link } from "react-router-dom";

export default function SongTableListAdmin({ songs }) {
	return (
		<div className="hidden md:block  relative  shadow-md md:rounded-lg">
			<table className="w-full   text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Song
						</th>
						<th scope="col" className="px-6 py-3">
							Artist
						</th>
						<th scope="col" className="px-6 py-3">
							Album
						</th>
						<th scope="col" className="px-6 py-3">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{songs.length === 0 ? (
						<tr>No Songs added</tr>
					) : (
						songs.map((song) => (
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-baseline gap-2"
								>
									<img className="w-10" src={song.cover_img} alt="" />
									<span className="truncate">{song.name}</span>
								</th>
								<td className="px-6 py-4 truncate">{song.artist}</td>
								<td className="px-6 py-4 truncate">{song.album}</td>
								<td className="px-3 py-4 flex gap-2">
									<Link to={`/admin/songs/${song.id}`}>
										<span class="material-symbols-outlined text-green-600">
											visibility
										</span>
									</Link>

									<Link to={`/admin/songs/${song.id}`}>
										<span class="material-symbols-outlined text-yellow-500">
											edit
										</span>
									</Link>

									<span class="material-symbols-outlined text-red-600">
										delete
									</span>
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
}
