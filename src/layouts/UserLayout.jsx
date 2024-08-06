import { Outlet } from "react-router-dom";

export default function UserLayout() {
	return (
    <div>
      nav
      <Outlet />
      footer
		</div>
	);
}
