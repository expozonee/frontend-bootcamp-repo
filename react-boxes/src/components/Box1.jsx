import { Box2 } from "./Box2";
import { Div } from "./Div";

export function Box1() {
  return (
    <Div background={"lightgreen"} width={1000} height={500}>
      <Box2 />
    </Div>
  );
}
