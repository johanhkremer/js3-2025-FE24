import { useState } from "react"
import "../assets/testButton.css"

const TestButton = () => {
    const [switchButton, setSwitchButton] = useState<boolean>(false)

    const handelButtonClick = () => {
        setSwitchButton(!switchButton)
        console.log(switchButton)
    }

    return (
        <>
            <button className={switchButton
                ? "green"
                : "red"
            } onClick={handelButtonClick}>Handel Click</button>
            {switchButton
                ? <h1>Hello World! (true)</h1>
                : <h1>Godbye World! (false)</h1>
            }
        </>
    )
}

export default TestButton