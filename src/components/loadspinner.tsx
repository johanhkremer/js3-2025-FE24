import styles from "./loadSpinner.module.css"

type LoadSpinnerProps = {
    size?: "sm" | "md" | "lg";
    className?: string;
}

const LoadSpinner = ({ size = "md", className }: LoadSpinnerProps) => {

    return (
        <span className={`${styles.loader} ${styles[size]} ${className ?? ""}`}
        ></span>
    )
}

export default LoadSpinner