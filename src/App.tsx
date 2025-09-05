import { useState } from 'react'
import styles from './App.module.css'
import MessagePropComponent from './components/MessagePropComponent'
import ObjectPropComponent from './components/ObjectPropComponent'

function App() {
  //First message with text only
  const [message, setMessage] = useState<string>("")

  //Second message with text AND boolean
  const [objectMessage, setObjectMessage] = useState<string>("")
  const [objectBoolean, setObjectBooolean] = useState<boolean>(false)

  return (
    <>
      <h1>Props</h1>
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

export default App
