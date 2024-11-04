import { Box3 } from "./Box3";

export function Box2() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "lightblue",
        width: "900px",
        height: "400px",
      }}
    >
      <Box3 />
    </div>
  );
}
