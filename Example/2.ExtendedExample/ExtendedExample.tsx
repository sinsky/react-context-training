import { useContext } from "react";
import { currentUserContext, currentUserContext_success, useCurrentUserName, CurrentUserProvider } from "./context";
import ErrorBoundary from "../../components/ErrorBoundary";
import Case1Context from "./success/case1";
import Case2Context from "./success/case2";
import Case3Context from "./success/case3";
import Case4Context, { createCtx } from "./success/case4";
import StringTest1 from "./Test/string/test1";
import StringTest2 from "./Test/string/test2";
import StringTest3 from "./Test/string/test3";

export const [ctx, TextProvider] = createCtx<string>("someText");

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
        <Case3Context />
        <h4>case 4</h4>
        <Case4Context />
      </div>
      <h2>Try using case4.</h2>
      <TextProvider>
        <div style={{ marginLeft: "4rem" }}>
          <StringTest1 />
          <StringTest2 />
          <StringTest3 />
        </div>
        <p style={{fontWeight: "bold"}}>You see how the text is changed at the same time in the provider, right?</p>
      </TextProvider>
    </>
  );
}

export default App;
