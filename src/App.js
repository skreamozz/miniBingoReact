import "./App.css";
import { Bingo } from "./components";
import { BingoProvider } from "./context/BingoContext";
function App() {
  return (
    <div className="container">
      <div className="jumbotron text-center">
        <h3>Bingo de Liliana!! </h3>
      </div>
      <BingoProvider>
        <Bingo />
      </BingoProvider>
    </div>
  );
}

export default App;
