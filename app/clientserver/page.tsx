import ClientSideButton from "@/components/client-side-button"
import { Counter } from "@/components/counter"

const ClientServerPage = () => {
    return (
        <div className="flex flex-col gap-3 border-2 border-b-blue-900 p-3">
            <h1>Server side</h1>
            <div className="border-2 border-y-rose-900">
                <h2>Client side</h2>
                <ClientSideButton />
            </div>
            <div className="border-2 border-y-rose-900">
                <h2>Client side</h2>
                <Counter />
            </div>
        </div>
    )
}

export default ClientServerPage