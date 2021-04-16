import './App.css';
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import { ToDos } from "./Components/ToDos";
import { About } from "./Components/About";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header title="ToDos List" search={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <ToDos />
              </>
            )}}>
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
