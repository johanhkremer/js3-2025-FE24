import styles from "./loadSpinner.module.css"

const LoadSpinner = () => {
    return (
        <div className={styles.container}>
            <span className={styles.loader}></span>
        </div>
    )
}

export default LoadSpinner