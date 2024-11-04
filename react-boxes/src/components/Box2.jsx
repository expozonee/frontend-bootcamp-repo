import { Box3 } from "./Box3";
import { Div } from "./Div";

export function Box2() {
  return (
    <Div background={"lightblue"} width={900} height={400}>
      <Box3 />
    </Div>
  );
}
