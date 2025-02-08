import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "@/types/user";

export const AuthContext = createContext<{ user: User|null,  setUser: Dispatch<SetStateAction<User | null>>, loading: boolean }>({
  user: null,
  setUser: () => {},
  loading: false,
});
