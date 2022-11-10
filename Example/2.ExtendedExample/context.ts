import { createContext, useContext } from "react";

export const currentUserContext = createContext<string | undefined>(undefined);

export const currentUserContext_success = createContext<string>(undefined!);

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

// case3
export const [useCtx, SettingProvider] = createCtx<string>();
