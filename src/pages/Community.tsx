import { Outlet } from "react-router-dom";

export default function Community() {
  return (
    <div>
      <h1>社区</h1>

      {/* 这里是子路由显示的位置 */}
      <Outlet />
    </div>
  );
}