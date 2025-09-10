import { useState } from "react"
import SideEffectCounter from "../components/SideEffectCounter"
import styles from "./home.module.css"
import PropMessage from "../components/PropMessage"

const Home = () => {
    const [propMessage, setPropMessage] = useState<string>("")

    const handlePropMessage = (value: string) => {
        setPropMessage(value)
    }

    return (
        <main>
            <div className={styles.container}>
                <div>
                    <h2>Callback prop (parent)</h2>
                    <PropMessage message={handlePropMessage} />
                </div>

                <div>
                    <p>{propMessage}</p>
                </div>
            </div>

            <div className={styles.container}>
                <SideEffectCounter />
            </div>
        </main>

    )
}

export default Home