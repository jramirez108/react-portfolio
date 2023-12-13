import Main from './components/Main'
import Navbar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
