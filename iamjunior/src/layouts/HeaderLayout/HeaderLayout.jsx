import { Outlet } from "react-router-dom";
import { Topbar } from "../../components/Topbar/Topbar";

export function HeaderLayout() {
  return (
    <div>
      <Topbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
