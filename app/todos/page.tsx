import { addTodo, toggleTodo, deleteTodo } from "@/app/actions/todos";
import { todos, type Todo } from "@/lib/data/todos";


export default async function TodosPage() {
    const todosData = todos as Todo[];

    return (
        <section className="max-w-lg mx-auto space-y-4 p-4">
            <h1 className="text-2xl font-semibold">Todos</h1>

            <form action={addTodo} className="flex gap-2">
                <input name="title" placeholder="Add a todo…" className="border px-3 py-2 flex-1" />
                <button className="border px-3 py-2">Add</button>
            </form>

            <ul className="space-y-2">
                {todosData.map(todo => (
                    <li key={todo.id} className="flex items-center gap-3 border px-3 py-2 rounded">
                        <form action={toggleTodo}>
                            <input type="hidden" name="id" value={todo.id} />
                            <button type="submit"><input readOnly type="checkbox" checked={todo.done} /></button>
                        </form>
                        <span className={todo.done ? "line-through text-gray-500" : ""}>{todo.title}</span>
                        <form className="ml-auto" action={deleteTodo}>
                            <input type="hidden" name="id" value={todo.id} />
                            <button className="border px-2 py-1">Delete</button>
                        </form>
                    </li>
                ))}
            </ul>
        </section>
    );
}
