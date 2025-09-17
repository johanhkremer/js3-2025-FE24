import TodosFetchHook from "../components/TodosFetchHook";
import styles from "./home.module.css"

const Home = () => {

    return (
        <main className={styles.container}>
            <TodosFetchHook />
        </main>
    );
}

export default Home