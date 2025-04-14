import { Switch, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <DefaultLayout>
          <HomePage />
        </DefaultLayout>
      </Route>

      <Route path="/shop">
        <DefaultLayout>
          <ShopPage />
        </DefaultLayout>
      </Route>

      {/*Catch all 404 route */}
      <Route path="*">
        <DefaultLayout>
          {/* 404 Page */}
          <ErrorPage />
        </DefaultLayout>
      </Route>
    </Switch>
  );
}

export default App;
