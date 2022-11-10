import { useContext } from "react";
import { ctx2 } from "../../ExtendedExample";

export default function () {
  const { state, update } = useContext(ctx2);
  return (
    <div style={{ background: "lavender" }}>
      <h4>page is test2. readonly</h4>
      <p>state.name: {state.name}</p>
      <p>state.id: {state.id}</p>
    </div>
  );
}
