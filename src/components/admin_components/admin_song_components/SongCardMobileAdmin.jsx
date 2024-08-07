import { Link } from "react-router-dom";

export default function SongCardMobileAdmin({ song }) {
	return (
		<div class="relative overflow-x-auto shadow-md sm:rounded-lg rounded-md ">
			<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<tbody>
					<tr class="border-b border-gray-200 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
						>
							Song
						</th>
						<td class="px-6 py-4 flex items-baseline gap-1">
							<img className="w-10" src={song.cover_img} alt="" />
							<span className="truncate">{song.name}</span>
						</td>
					</tr>
					<tr class="border-b border-gray-200 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
						>
							Artist
						</th>
						<td class="px-6 py-4">{song.artist}</td>
					</tr>
					<tr class="border-b border-gray-200 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
						>
							Album
						</th>
						<td class="px-6 py-4">{song.album ?? "Single"}</td>
					</tr>
					<tr class="border-b border-gray-200 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
						>
							Actions
						</th>
						<td className="py-3  flex justify-center gap-4 ">
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

							<span class="material-symbols-outlined text-red-600">delete</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
