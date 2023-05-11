import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Categories from "./component/Categories/Categories";
import Food from "./component/Food/Food";
import Hero from "./component/Hero/Hero";
import HeroCard from "./component/HeroCard/HeroCard";
import Navbar from "./component/Navbar/Navbar";
import OrderConfirm from "./component/OrderConfirm/OrderConfirm";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Hero />
              <HeroCard />
              <Food />
              <Categories />
            </Route>
            <Route exact path="/order-details">
              <Navbar />
              <OrderConfirm />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
