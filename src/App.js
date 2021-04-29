import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Shop from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";
import SignInSignUp from "./Pages/SignInSignUp/SignInSignUp";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
};

export default App;
