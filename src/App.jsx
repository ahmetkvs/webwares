import { Switch, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutUsPage from "./pages/AboutUsPage";
import SignUpFormPage from "./pages/SignUpFormPage";
import Login from "./pages/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { verifyTokenUser } from "./utils/authCheck";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import OrderPage from "./pages/OrderPage";
import { ToastContainer } from "react-toastify";
import PrevOrdersPage from "./pages/PrevOrdersPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    verifyTokenUser(dispatch);
  }, [dispatch]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <HomePage />
          </DefaultLayout>
        </Route>

        <Route path="/signup">
          <DefaultLayout>
            <SignUpFormPage />
          </DefaultLayout>
        </Route>

        <Route path="/login">
          <DefaultLayout>
            <Login />
          </DefaultLayout>
        </Route>

        <Route path="/contact">
          <DefaultLayout>
            <ContactPage />
          </DefaultLayout>
        </Route>

        <Route path="/team">
          <DefaultLayout>
            <TeamPage />
          </DefaultLayout>
        </Route>

        <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId">
          <DefaultLayout>
            <ProductDetailPage />
          </DefaultLayout>
        </Route>

        <Route path="/shop/:gender/:categoryName/:categoryId">
          <DefaultLayout>
            <ShopPage />
          </DefaultLayout>
        </Route>

        <Route path="/shop">
          <DefaultLayout>
            <ShopPage />
          </DefaultLayout>
        </Route>

        <Route path="/about">
          <DefaultLayout>
            <AboutUsPage />
          </DefaultLayout>
        </Route>

        <ProtectedRoute path="/order">
          <DefaultLayout>
            <OrderPage />
          </DefaultLayout>
        </ProtectedRoute>

        <ProtectedRoute path="/prev-orders">
          <DefaultLayout>
            <PrevOrdersPage />
          </DefaultLayout>
        </ProtectedRoute>

        <Route path="/cart">
          <DefaultLayout>
            <ShoppingCartPage />
          </DefaultLayout>
        </Route>

        {/*Catch all 404 route */}
        <Route path="*">
          <DefaultLayout>
            <ErrorPage />
          </DefaultLayout>
        </Route>
      </Switch>
    </>
  );
}

export default App;
