import { createContext } from "react";
import { TodoContextType } from "./interfaces";

export const TodoContext = createContext<TodoContextType | undefined>(undefined);