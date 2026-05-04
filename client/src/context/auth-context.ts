import { createContext } from "react";
import type { UserDetails } from "../interfaces/AuthInterface";

export interface AuthContextType {
    user: UserDetails | null;
    loading: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

/** Single module for the context object avoids duplicate-context issues with HMR / split imports. */
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
