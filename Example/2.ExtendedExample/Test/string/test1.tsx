import { useContext } from "react";
import { ctx } from "../../ExtendedExample";

export default function () {
  const { state, update } = useContext(ctx);
  return (
    <div style={{ background: "aliceblue" }}>
      <h4>page is test1. read/write</h4>
      <p>state: {state}</p>
      <p>Try changing the value in the text box below!</p>
      <p>
        <input type="text" value={state} onChange={(e) => update(e.target.value)} />
      </p>
    </div>
  );
}
