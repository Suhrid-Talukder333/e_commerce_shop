import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

const hats = () => {
  return <div>HELLO WORLD</div>;
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={hats} />
    </Switch>
  );
};

export default App;
