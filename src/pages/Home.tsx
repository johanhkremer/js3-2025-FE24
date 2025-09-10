import { useState } from "react"
import PropMessage from "../components/propMessage"

const Home = () => {
    const [propMessage, setPropMessage] = useState<string>("")

    const handlePropMessage = (value: string) => {
        setPropMessage(value)
    }

    return (
        <main>
            <div>
                <h2>Callback prop (parent)</h2>
                <PropMessage message={handlePropMessage} />
            </div>

            <div>
                <p>{propMessage}</p>
            </div>

        </main>

    )
}

export default Home