import styles from "./objectPropComponent.module.css"

interface ObjectPropComponentProps {
    objectMessage: string,
    objectBoolean: boolean
}

const ObjectPropComponent = ({ objectMessage, objectBoolean }: ObjectPropComponentProps) => {
    return (
        <>
            <h2>Component</h2>
            <h3>prop message ✉️</h3>
            {objectMessage &&
                <p>{objectMessage}</p>
            }
            <div className={styles.imgContainer}>
                {objectBoolean
                    ? <img className={styles.img} src="/public/true.jpg" />
                    : <img className={styles.img} src="/public/false.jpg" />
                }
            </div>
        </>
    )
}

export default ObjectPropComponent