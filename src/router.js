import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import SagaComponent from "./components/sagaComp";
import ContextComponent from "./components/contextComp";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saga" component={SagaComponent} />
        <Route exact path="/context" component={ContextComponent} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
