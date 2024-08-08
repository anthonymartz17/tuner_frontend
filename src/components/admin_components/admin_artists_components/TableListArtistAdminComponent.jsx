import { Link } from "react-router-dom";

export default function TableListAdminComponent({ artists }) {
	return (
		<div className="hidden md:block  relative  shadow-md md:rounded-lg w-full">
			<div className="flex justify-end">
				<Link to="/admin/artists/new">
					<button
						type="button"
						className="py-2.5  px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>
						+ Add Artist
					</button>
				</Link>
			</div>
			<table className="w-full   text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Artist
						</th>
						<th scope="col" className="px-6 py-3">
							Genre
						</th>
						<th scope="col" className="px-6 py-3">
							Bio
						</th>
						<th scope="col" className="px-6 py-3">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{artists.length === 0 ? (
						<tr>
							<td>No Artists added</td>
						</tr>
					) : (
						artists.map((artist) => (
							<tr
								key={artist.id}
								className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
							>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-baseline gap-2"
								>
									<img className="w-10" src={artist.cover_img} alt="" />
									<span className="truncate">{artist.name}</span>
								</th>
								<td className="px-6 py-4 truncate">{artist.genre}</td>
								<td className="px-6 py-4 truncate">{artist.bio}</td>
								<td className="px-3 py-4 flex gap-2">
									<Link to={`/admin/artists/${artist.id}`}>
										<span className="material-symbols-outlined text-green-600">
											visibility
										</span>
									</Link>

									<Link to={`/admin/artists/${artist.id}`}>
										<span className="material-symbols-outlined text-yellow-500">
											edit
										</span>
									</Link>

									<span className="material-symbols-outlined text-red-600">
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
