import { useState } from "react";
import { useCtx, SettingProvider } from "../context";

export default function App() {
  // const key = useCustomHook("key"); // get a value from a hook, must be in a component
  const key = "my hook?";
  return (
    <SettingProvider value={key}>
      <Component />
    </SettingProvider>
  );
}
function Component() {
  const key = useCtx(); // can still use without null check!
  return <div>{key}</div>;
}

/**
 * Samples from the site
 */

// import React from 'react'

// const useCustomHook = (key: string) => {
//   const [state, setState] = React.useState<{ [x: string]: string }>({ "key": "foo" })
//   return state[key]
// }
// // create context with no upfront defaultValue
// // without having to do undefined check all the time
// function createCtx<A>() {
//   const ctx = React.createContext<A | undefined>(undefined);
//   function useCtx() {
//     const c = React.useContext(ctx);
//     if (!c) throw new Error("useCtx must be inside a Provider with a value");
//     return c;
//   }
//   return [useCtx, ctx.Provider] as const; // make TypeScript infer a tuple, not an array of union types
// }

// // usage

// export const [useCtx, SettingProvider] = createCtx<string>(); // specify type, but no need to specify value upfront!
// export function App() {
//   const key = useCustomHook("key"); // get a value from a hook, must be in a component
//   return (
//     <SettingProvider value={key}>
//       <Component />
//     </SettingProvider>
//   );
// }
// export function Component() {
//   const key = useCtx(); // can still use without null check!
//   return <div>{key}</div>;
// }
