import { Outlet } from "react-router-dom";

export default function Community() {
  return (
    <div
      style={{
        paddingTop: "80px",      // 给固定导航预留空间
        maxWidth: "900px",
        margin: "0 auto",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "700",
          marginBottom: "40px",
          color: "#1f2937",
        }}
      >
        论坛
      </h1>

      <Outlet />
    </div>
  );
}