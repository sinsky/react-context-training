import { useContext } from "react";
import { currentUserContext, currentUserContext_success, useCurrentUserName, CurrentUserProvider } from "../context";
import ErrorBoundary from "../../../components/ErrorBoundary";

function EnthusasticGreeting() {
  const currentUser = useCurrentUserName();
  return <div>HELLO {currentUser.toUpperCase()}!</div>;
}

export default function () {
  return (
    <>
      <CurrentUserProvider value="Anders">
        <EnthusasticGreeting />
      </CurrentUserProvider>

      {/* 意図したエラー(自分でthrow Errorしているから) */}
      <ErrorBoundary>
        <CurrentUserProvider value={undefined}>
          <EnthusasticGreeting />
        </CurrentUserProvider>
      </ErrorBoundary>
    </>
  );
}
