import styles from "./PropMessage.module.css"

interface PropMassageProps {
    message: (value: string) => void
}

const PropMessage = ({ message }: PropMassageProps) => {
    return (
        <div className={styles.container}>
            <h2>Component (Child)</h2>
            <h3>Prop Message Input</h3>
            <input type="text" onChange={(e) => message(e.target.value)} />
        </div>
    )
}

export default PropMessage