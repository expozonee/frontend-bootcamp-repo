import { Box4 } from "./Box4";

export function Box3() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
        background: "lightpink",
        width: "800px",
        height: "300px",
      }}
    >
      <Box4 />
      <Box4 />
    </div>
  );
}
