import { useContext } from "react";
import { currentUserContext, currentUserContext_success, useCurrentUserName, CurrentUserProvider } from "./context";
import ErrorBoundary from "../../components/ErrorBoundary";
import Case1Context from "./success/case1";
import Case2Context from "./success/case2";

/**
 * Extended Example
 */
function EnthusasticGreeting() {
  const currentUser = useContext(currentUserContext);
  return <p>HELLO {currentUser!.toUpperCase()}!</p>;
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
        <Case1Context />
        <h4>case 2</h4>
        <Case2Context />
        <h4>case 3</h4>
      </div>
    </>
  );
}

export default App;
