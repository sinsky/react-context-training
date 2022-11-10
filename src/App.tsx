import { useContext, useState } from "react";
import { AppContextInterface, AppCtx, currentUserContext, currentUserContext_success, useCurrentUserName, CurrentUserProvider } from "../util/context";
import ErrorBoundary from "../components/ErrorBoundary";

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

/**
 * Extended Example
 */
function EnthusasticGreeting() {
  const currentUser = useContext(currentUserContext);
  return <p>HELLO {currentUser!.toUpperCase()}!</p>;
}

function EnthusasticGreeting1() {
  const currentUser = useContext(currentUserContext_success);
  return <div>HELLO {currentUser.toUpperCase()}!</div>;
}

function EnthusasticGreeting2() {
  const currentUser = useCurrentUserName();
  return <div>HELLO {currentUser.toUpperCase()}!</div>;
}

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <h2>BasicExample</h2>
      <div style={{ marginLeft: "4rem" }}>
        <h3>use provider</h3>
        <AppCtx.Provider value={sampleAppContext}>
          <Example />
        </AppCtx.Provider>
        <h3>unused provider</h3>
        <Example />
      </div>
      <h2>Extended Example</h2>
      <div style={{ marginLeft: "4rem" }}>
        <h3>Bad Context</h3>
        <currentUserContext.Provider value="Anders">
          <EnthusasticGreeting />
        </currentUserContext.Provider>
        {/* 意図しないエラー */}
        <ErrorBoundary>
          <currentUserContext.Provider value={undefined}>
            <EnthusasticGreeting />
          </currentUserContext.Provider>
        </ErrorBoundary>
        <h3>Success Context</h3>
        <h4>case 1</h4>
        <currentUserContext_success.Provider value="Anders">
          <EnthusasticGreeting1 />
        </currentUserContext_success.Provider>
        <h4>case 2</h4>
        <CurrentUserProvider value="Anders">
          <EnthusasticGreeting2 />
        </CurrentUserProvider>
        {/* 意図したエラー(自分でthrow Errorしているから) */}
        <ErrorBoundary>
          <CurrentUserProvider value={undefined}>
            <EnthusasticGreeting2 />
          </CurrentUserProvider>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
