"use server"

import { revalidatePath } from "next/cache";
import { todos } from "@/lib/data/todos";

//Create
export async function addTodo(formData: FormData) {
    const title = String(formData.get("title") || "").trim();
    if (!title) return;
    todos.push({ id: Date.now(), title, done: false });
    revalidatePath("/todos");
    //redirect("/todos/id")
}

//Update
export async function toggleTodo(formData: FormData) {
    const id = Number(formData.get("id"));
    const t = todos.find(t => t.id === id);
    if (t) t.done = !t.done;
    revalidatePath("/todos");
}

//Destroy
export async function deleteTodo(formData: FormData) {
    const id = Number(formData.get("id"));
    const i = todos.findIndex(t => t.id === id);
    if (i !== -1) todos.splice(i, 1);
    revalidatePath("/todos");
}