import { createContext } from "react";
import type { User } from "../types/user";

export const UserCardContext = createContext<User | undefined>(undefined)