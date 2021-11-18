import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import Nav from "./components/Nav";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import BookStoreScreen from "./screens/BookStoreScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import Footer from "./components/Footer";

// Dependencies
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMMERCE
import { commerce } from "./lib/commerce";

// Background Music
import HauntedByScreams from "./music/HauntedByScreams.mp3";

function App() {
  const [books, setBooks] = useState([]);
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [cart, setCart] = useState({});

  // Background Music

  const fetchBooks = async () => {
    const { data } = await commerce.products.list();

    setBooks(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const fetchFeaturedBooks = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["featured"]
    });

    setFeaturedBooks(data);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  useEffect(() => {
    fetchBooks();
    fetchFeaturedBooks();
    fetchCart();
  }, []);

  return (
    <div className="app">
      <Router>
        <iframe
          style={{ display: "none" }}
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/uSxM2IIABRg?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <Nav totalItems={cart.total_items} />
        <Switch>
          <Route path="/about">
            <AboutScreen />
            <Footer />
          </Route>
          <Route path="/contact">
            <ContactScreen />
            <Footer />
          </Route>
          <Route path="/bookstore">
            <BookStoreScreen books={books} />
            <Footer />
          </Route>
          <Route path="/cart">
            <CartScreen cart={cart} handleUpdateCartQty={handleUpdateCartQty} />
          </Route>
          <Route exact path="/">
            <HomeScreen
              featuredBooks={featuredBooks}
              onAddToCart={handleAddToCart}
            />

            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
