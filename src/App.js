import logo from './logo.svg';
import styles from './App.module.css';
import Header from './components/Header.js';
import Main from './components/Main.js';

function App() {
  return (
    <section className={styles.corpo}>
      <Header />
      <Main />
    </section>
  );
}

export default App;
