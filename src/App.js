import "./App.css";
import { Bingo, Listado } from "./components";
import { BingoProvider } from "./context/BingoContext";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-color text-center">
        <h3>Bingo de Liliana!! </h3>
      </div>

      <BingoProvider>
        <Router>
          <Switch>
            <Route path="/lista">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <Listado />
                </div>
              </div>
            </Route>
            <Route path="/" exact component={Bingo} />
          </Switch>
        </Router>
      </BingoProvider>
    </div>
  );
}

export default App;
