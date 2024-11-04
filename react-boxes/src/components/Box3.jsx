import { Box4 } from "./Box4";
import { Div } from "./Div";

export function Box3() {
  return (
    <Div background={"pink"} flexDirection={"column"} width={800} height={300}>
      <Box4 />
      <Box4 />
    </Div>
  );
}
