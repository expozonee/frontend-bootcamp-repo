import { Box2 } from "./Box2";

export function Box1() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "lightgreen",
        width: "1000px",
        height: "500px",
      }}
    >
      <Box2 />
    </div>
  );
}
