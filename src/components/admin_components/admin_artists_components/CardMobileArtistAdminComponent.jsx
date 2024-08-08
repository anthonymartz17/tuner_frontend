import { Link } from "react-router-dom";

export default function SongCardMobileAdmin({ artist }) {
	return (
		<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<tbody>
				<tr className="border-b border-gray-200 dark:border-gray-700">
					<th
						scope="row"
						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
					>
						Artist
					</th>
					<td className="px-6 py-4 flex items-baseline gap-1">
						<img className="w-10" src={artist.cover_img} alt="" />
						<span className="truncate">{artist.name}</span>
					</td>
				</tr>
				<tr className="border-b border-gray-200 dark:border-gray-700">
					<th
						scope="row"
						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
					>
						Genre
					</th>
					<td className="px-6 py-4">{artist.genre}</td>
				</tr>
				<tr className="border-b border-gray-200 dark:border-gray-700">
					<th
						scope="row"
						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
					>
						Bio
					</th>
					<td className="px-6 py-4">{artist.bio ?? "N/A"}</td>
				</tr>
				<tr className="border-b border-gray-200 dark:border-gray-700">
					<th
						scope="row"
						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
					>
						Actions
					</th>
					<td className="py-3  flex justify-center gap-4 ">
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
			</tbody>
		</table>
	);
}
