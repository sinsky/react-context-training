import { useContext } from "react";
import { AppContextInterface, AppCtx } from "./context";

/**
 * BasicExample
 */
const Example = () => {
  const appContext = useContext(AppCtx);
  return (
    <div>
      {appContext ? (
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{appContext.name}</td>
            </tr>
            <tr>
              <th>Author</th>
              <td>{appContext.author}</td>
            </tr>
            <tr>
              <th>URL</th>
              <td>{appContext.url}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>unused provider...</p>
      )}
    </div>
  );
};

const sampleAppContext: AppContextInterface = {
  name: "Using React Context in a Typescript App",
  author: "thehappybug",
  url: "http://www.example.com",
};


function BasicExample() {
  return (
    <>
      <h2>BasicExample</h2>
      <div style={{ marginLeft: "4rem" }}>
        <h3>use provider</h3>
        <AppCtx.Provider value={sampleAppContext}>
          <Example />
        </AppCtx.Provider>
        <h3>unused provider</h3>
        <Example />
      </div>
    </>
  );
}

export default BasicExample;
