import Box from "./Box/Box";

export default function BoxAnimation() {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box width={100} delay={1000} />
      <Box width={200} delay={2000} />
      <Box width={300} delay={3000} />
      <Box width={400} delay={4000} />
    </div>
  );
}
