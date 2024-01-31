import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import ProductList from "../features/product/ProductList";
import Header from "../components/Header";

function HomePage() {
  return (
    <Provider store={store}>
      <div className="bg-gray-100 ">
        <Header />
        <ProductList />
      </div>
    </Provider>
  );
}

export default HomePage;
