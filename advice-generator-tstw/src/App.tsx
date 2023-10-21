import "./styles/App.scss";
import { useGlobalContext } from "./context";
import diceIcon from "./images/icon-dice.svg";

function App() {
  const { fetchAdvice, advice, adviceId } = useGlobalContext();
  return (
    <main>
      <section className="advice-container">
        <h1 className="advice-title">advice #{adviceId}</h1>

        <p className="advice-text">&quot;{advice}&quot;</p>
        <div className="divider">
          <div className="divider-icon" />
        </div>
        <div className="advice-btn">
          <img
            src={diceIcon}
            alt="dice icon"
            className="dice-icon"
            onClick={fetchAdvice}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
