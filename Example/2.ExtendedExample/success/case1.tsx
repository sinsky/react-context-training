import { useContext } from "react";
import { currentUserContext_success } from "../context";

function EnthusasticGreeting() {
  const currentUser = useContext(currentUserContext_success);
  return <div>HELLO {currentUser.toUpperCase()}!</div>;
}

export default function () {
  return (
    <currentUserContext_success.Provider value="Anders">
      <EnthusasticGreeting />
    </currentUserContext_success.Provider>
  );
}
