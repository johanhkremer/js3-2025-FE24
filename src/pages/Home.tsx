import TodosTanStack from "../components/TodosTanStack";
import styles from "./home.module.css"

const Home = () => {

    return (
        <main className={styles.container}>
            <TodosTanStack />
        </main>
    );
}

export default Home