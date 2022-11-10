import { useContext } from "react";
import { ctx2 } from "../../ExtendedExample";

export default function () {
  const { state, update } = useContext(ctx2);
  return (
    <div style={{ background: "oldlace" }}>
      <h4>page is test3. writeonly</h4>
      <p>Try changing the value in the text box below!</p>
      <p>
        <p>
          <span>name: </span>
          <span>
            <input type="text" value={state.name} onChange={(e) => update({ ...state, name: e.target.value })} />
          </span>
        </p>
        <p>
          <span>id: </span>
          <span>
            <input type="number" value={state.id} onChange={(e) => update({ ...state, id: Number(e.target.value) })} />
          </span>
        </p>
      </p>
    </div>
  );
}
