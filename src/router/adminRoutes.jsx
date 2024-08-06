import AdminEditPage from "../pages/admin_pages/admin/AdminEditPage";
import AdminListPage from "../pages/admin_pages/admin/AdminListPage";
import AdminSingleAdminPage from "../pages/admin_pages/admin/AdminSingleAdminPage";
import AdminsPage from "../pages/admin_pages/admin/AdminsPage";
import AdminAlbumEditPage from "../pages/admin_pages/admin_albums/AdminAlbumEditPage";
import AdminAlbumsListPage from "../pages/admin_pages/admin_albums/AdminAlbumsListPage";
import AdminAlbumsPage from "../pages/admin_pages/admin_albums/AdminAlbumsPage";
import AdminSingleAlbumPage from "../pages/admin_pages/admin_albums/AdminSingleAlbumPage";
import AdminArtistEditPage from "../pages/admin_pages/admin_artists/AdminArtistEditPage";
import AdminArtistListPage from "../pages/admin_pages/admin_artists/AdminArtistListPage";
import AdminArtistsPage from "../pages/admin_pages/admin_artists/AdminArtistsPage";
import AdminSingleArtistPage from "../pages/admin_pages/admin_artists/AdminSingleArtistPage";
import AdminSingleSongPage from "../pages/admin_pages/admin_songs/AdminSingleSongPage";
import AdminSongEditPage from "../pages/admin_pages/admin_songs/AdminSongEditPage";
import AdminSongsListPage from "../pages/admin_pages/admin_songs/AdminSongsListPage";
import AdminSongsPage from "../pages/admin_pages/admin_songs/AdminSongsPage";
import AdminSingleUserPage from "../pages/admin_pages/admin_users/AdminSingleUserPage";
import AdminUserEditPage from "../pages/admin_pages/admin_users/AdminUserEditPage";
import AdminUserListPage from "../pages/admin_pages/admin_users/AdminUserListPage";
import AdminUsersPage from "../pages/admin_pages/admin_users/AdminUsersPage";
import DashboardPage from "../pages/admin_pages/dashboard/DashboardPage";

export default [
	{
		path: "",
		element: <DashboardPage />,
	},
	{
		path: "songs",
		element: <AdminSongsPage />,
		children: [
			{ path: "", element: <AdminSongsListPage /> },
			{ path: ":song_id", element: <AdminSingleSongPage /> },
			{ path: ":song_id/edit", element: <AdminSongEditPage /> },
		],
	},
	{
		path: "artists",
		element: <AdminArtistsPage />,
		children: [
			{ path: "", element: <AdminArtistListPage /> },
			{
				path: ":artist_id",
				element: <AdminSingleArtistPage />,
			},
			{ path: ":artist_id/edit", element: <AdminArtistEditPage /> },
		],
	},
	{
		path: "albums",
		element: <AdminAlbumsPage />,
		children: [
			{ path: "", element: <AdminAlbumsListPage /> },
			{
				path: ":album_id",
				element: <AdminSingleAlbumPage />,
			},
			{ path: ":album_id/edit", element: <AdminAlbumEditPage /> },
		],
	},
	{
		path: "users",
		element: <AdminUsersPage />,
		children: [
			{ path: "", element: <AdminUserListPage /> },
			{
				path: ":user_id",
				element: <AdminSingleUserPage />,
			},
			{ path: ":user_id/edit", element: <AdminUserEditPage /> },
		],
	},
	{
		path: "admins",
		element: <AdminsPage />,
		children: [
			{ path: "", element: <AdminListPage /> },
			{
				path: ":admin_id",
				element: <AdminSingleAdminPage />,
			},
			{ path: ":admin_id/edit", element: <AdminEditPage /> },
		],
	},
];
