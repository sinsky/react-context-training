import { createContext } from "react";

export interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

export const AppCtx = createContext<AppContextInterface | null>(null);
