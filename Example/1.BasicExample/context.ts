import { createContext } from "react";

/**
 * Basic Example
 */
export interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

export const AppCtx = createContext<AppContextInterface | null>(null);
