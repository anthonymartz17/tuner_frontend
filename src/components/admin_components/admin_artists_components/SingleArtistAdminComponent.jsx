import { Link } from "react-router-dom";
import { convertSecToMin, formatDate } from "../../../utils/formaters.utils";
export default function AdminSingleSongComponent({ song }) {
	return (
		<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<tbody>
				<tr className="border-b border-gray-200 dark:border-gray-700">
					<th
						scope="row"
						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
					>
						Song
					</th>
					<td className="px-6 py-4 flex items-baseline gap-1">
						<img className="w-10" src={song.cover_img} alt="" />
						<span className="truncate">{song.name}</span>
					</td>
				</tr>
				<tr className="border-b border-gray-200 dark:border-gray-700">
					<th
						scope="row"
						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
					>
						Artist
					</th>
					<td className="px-6 py-4">{song.artist}</td>
				</tr>
				<tr className="border-b border-gray-200 dark:border-gray-700">
					<th
						scope="row"
						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
					>
						Album
					</th>
					<td className="px-6 py-4">{song.album ?? "Single"}</td>
				</tr>
				<tr className="border-b border-gray-200 dark:border-gray-700">
					<th
						scope="row"
						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
					>
						Duration
					</th>
					<td className="px-6 py-4">{convertSecToMin(song.duration)}</td>
				</tr>
				<tr className="border-b border-gray-200 dark:border-gray-700">
					<th
						scope="row"
						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
					>
						Date Added
					</th>
					<td className="px-6 py-4">{formatDate(song.created_at)}</td>
				</tr>
				<tr className="border-b border-gray-200 dark:border-gray-700">
					<th
						scope="row"
						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
					>
						Actions
					</th>
					<td className="py-3  flex px-6 gap-4 ">
						<Link to={`/admin/songs/${song.id}/edit`}>
							<span className="material-symbols-outlined text-yellow-500">
								edit
							</span>
						</Link>

						<span className="material-symbols-outlined text-red-600">delete</span>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
