//import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";

function App() {
  return (
    <center>
      <div className={styles.calculator}>
        <Display></Display>
        <ButtonsContainer></ButtonsContainer>
      </div>
    </center>
  );
}

export default App;