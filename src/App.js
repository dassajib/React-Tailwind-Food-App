import { CartProvider } from "./CartContext";
import Categories from "./component/Categories/Categories";
import Food from "./component/Food/Food";
import Hero from "./component/Hero/Hero";
import HeroCard from "./component/HeroCard/HeroCard";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Hero />
        <HeroCard />
        <Food />
        <Categories />
      </CartProvider>
    </div>
  );
}

export default App;
