import { createContext, useContext } from "react";

/**
 * Basic Example
 */
export interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

export const AppCtx = createContext<AppContextInterface | null>(null);

/**
 * Extended Example
 */
export const currentUserContext = createContext<string | undefined>(undefined);

export const currentUserContext_success = createContext<string>(undefined!);

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
function createCtx<A extends {} | null>() {
  const ctx = createContext<A | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (c === undefined) throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}

export const [useCurrentUserName, CurrentUserProvider] = createCtx<string>();
