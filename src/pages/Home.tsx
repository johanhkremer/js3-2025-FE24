import TodosAsyncAwait from "../components/TodosAsyncAwait";
import styles from "./home.module.css"



const Home = () => {


    return (
        <main className={styles.container}>
            <TodosAsyncAwait />
        </main>
    );
}

export default Home