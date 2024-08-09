import ArtistListPage from "../pages/user_pages/user_artists/ArtistListPage";
import ArtistsPage from "../pages/user_pages/user_artists/ArtistsPage";
import SingleSongPage from "../pages/user_pages/user_songs/SingleSongPage";
import SongsListPage from "../pages/user_pages/user_songs/SongsListPage";
import SongsPage from "../pages/user_pages/user_songs/SongsPage";
import UserHomePage from "../pages/user_pages/userHomePage";
import SingleArtistPage from "../pages/user_pages/user_artists/SingleArtistPage";
import ArtistAlbumPage from "../pages/user_pages/user_artists/ArtistAlbumPage";
import ArtistSongPage from "../pages/user_pages/user_artists/ArtistSongPage";
import ArtistAlbumsAndSongs from "../pages/user_pages/user_artists/ArtistAlbumsAndSongs";
import AlbumsPage from "../pages/user_pages/user_albums/AlbumsPage";
import AlbumsListPage from "../pages/user_pages/user_albums/AlbumsListPage";
import SingleAlbumPage from "../pages/user_pages/user_albums/SingleAlbumPage";
import PlaylistsListPage from "../pages/user_pages/user_playlists/PlaylistsListPage";
import SinglePlaylistPage from "../pages/user_pages/user_playlists/SinglePlayListPage";
import IndexAuthUserPage from "../pages/user_pages/user_auth/IndexAuthUserPage";
import LoginAuthUserPage from "../pages/user_pages/user_auth/LoginAuthUserPage";

export default [
	{
		path: "",
		element: <UserHomePage />,
	},
	{
		path: "auth",
		element: <IndexAuthUserPage />,
		children: [{ path: "", element: <LoginAuthUserPage /> }],
	},
	{
		path: "songs",
		element: <SongsPage />,
		children: [
			{ path: "", element: <SongsListPage /> },
			{ path: ":song_id", element: <SingleSongPage /> },
		],
	},
	{
		path: "artists",
		element: <ArtistsPage />,
		children: [
			{ path: "", element: <ArtistListPage /> },
			{
				path: ":artist_id",
				element: <SingleArtistPage />,
				children: [
					{ path: "", element: <ArtistAlbumsAndSongs /> },
					{ path: "albums/:album_id", element: <ArtistAlbumPage /> },
					{ path: "songs/:song_id", element: <ArtistSongPage /> },
				],
			},
		],
	},
	{
		path: "albums",
		element: <AlbumsPage />,
		children: [
			{ path: "", element: <AlbumsListPage /> },
			{ path: ":album_id", element: <SingleAlbumPage /> },
		],
	},
	{
		path: "playlists",
		element: <AlbumsPage />,
		children: [
			{ path: "", element: <PlaylistsListPage /> },
			{ path: ":album_id", element: <SinglePlaylistPage /> },
		],
	},
];
