import { useState } from "react"
import styles from "./propsPage.module.css"
import MessagePropComponent from "../components/MessagePropComponent"
import ObjectPropComponent from "../components/ObjectPropComponent"
import { Link } from "react-router-dom"

const PropsPage = () => {
    //First message with text only
    const [message, setMessage] = useState<string>("")

    //Second message with text AND boolean
    const [objectMessage, setObjectMessage] = useState<string>("")
    const [objectBoolean, setObjectBooolean] = useState<boolean>(false)

    return (
        <>
            <h1>Props Page</h1>
            <Link to="/">Home Page</Link>
            <div className={styles.container}>
                <h2>Send me a message 📩</h2>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div className={styles.componentContainer}>
                    <MessagePropComponent message={message} />
                </div>
            </div>
            <div className={styles.container}>
                <h2>Send me a message 📩 + Boolead ✅❌ as an object</h2>
                <input
                    type="text"
                    value={objectMessage}
                    onChange={(e) => setObjectMessage(e.target.value)}
                />
                <input
                    type="checkbox"
                    onChange={() => setObjectBooolean(!objectBoolean)}
                />
                <div className={styles.componentContainer}>
                    <ObjectPropComponent objectMessage={objectMessage} objectBoolean={objectBoolean} />
                </div>
            </div>
        </>
    )
}

export default PropsPage