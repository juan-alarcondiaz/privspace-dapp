import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "@/types/user";

export const AuthContext = createContext<{ user: User|null,  setUser: Dispatch<SetStateAction<User | null>>, loading: boolean }>({
  user: null,
  setUser: () => {},
  loading: false,
});

export const KiiPrivateInfoContext = createContext<{
  kiiPrivateInfo: string | undefined;
  loading: boolean;
  setKiiPrivateInfo: Dispatch<SetStateAction<string | undefined>>;
  handleGetKiiPrivateInfo: () => Promise<void>;
  handleSetKiiPrivateInfo: (kiiPrivateInfo: string) => Promise<void>;
}>({
  kiiPrivateInfo: undefined,
  loading: false,
  setKiiPrivateInfo: () => {},
  handleGetKiiPrivateInfo: async () => {},
  handleSetKiiPrivateInfo: async () => {},
});

export const WhitelistContext = createContext<{
  setWhitelist: Dispatch<SetStateAction<string[]>>;
  handleAddAddress: (address: string) => Promise<void>;
}>({
  setWhitelist: () => {},
  handleAddAddress: async () => {},
});