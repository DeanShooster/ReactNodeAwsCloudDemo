import { createContext } from "react";

export const userContext = createContext< UserContext | null >(null);

export type User = { email: string, name: string }

export type UserContext={
    user: User | null,
    updateUser:( user:User | null )=>void
}