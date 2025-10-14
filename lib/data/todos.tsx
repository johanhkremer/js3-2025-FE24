import "server-only";

export type Todo = {
    id: number;
    title: string;
    done: boolean
};

export const todos: Todo[] = [];
