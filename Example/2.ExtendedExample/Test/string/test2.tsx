import { useContext } from "react";
import { ctx } from "../../ExtendedExample";

export default function () {
  const { state, update } = useContext(ctx);
  return (
    <div style={{ background: "lavender"}}>
      <h4>page is test2. readonly</h4>
      <p>state: {state}</p>
    </div>
  );
}
