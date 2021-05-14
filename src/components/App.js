import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Main from "./Main";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <Switch>
        <Nav />
        <Route exact path="/홈" component={Home} />
        <Route path="/시장" component={Home} />
        <Route path="/쇼핑" component={Home} />
        <Route path="/콘텐츠" component={Home} />
        <Route path="/시세" component={Home} />
        <Route path="/도매" component={Home} />
        <Route path="/후기" component={Home} />
        <Route path="/문의" component={Home} />
      </Switch>
      <Main />
      <Home />
    </Router>
  );
}

export default App;
