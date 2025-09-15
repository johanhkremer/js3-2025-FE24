import Todos from "../components/Todos";
import styles from "./home.module.css"



const Home = () => {


    return (
        <main className={styles.container}>
            <Todos />
        </main>
    );
}

export default Home