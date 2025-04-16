import { Switch, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <DefaultLayout>
          <HomePage />
        </DefaultLayout>
      </Route>

      <Route path="/shop/product/:productId">
        <DefaultLayout>
          <ProductDetailPage />
        </DefaultLayout>
      </Route>

      <Route path="/contact">
        <DefaultLayout>
          <ContactPage />
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
          <ErrorPage />
        </DefaultLayout>
      </Route>
    </Switch>
  );
}

export default App;
