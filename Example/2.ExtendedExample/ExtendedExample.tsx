import { useContext } from "react";
import { currentUserContext, currentUserContext_success, useCurrentUserName, CurrentUserProvider } from "./context";
import ErrorBoundary from "../../components/ErrorBoundary";

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
    <>
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
    </>
  );
}

export default App;
