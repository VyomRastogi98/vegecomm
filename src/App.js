import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Product from "./Components/Main/Product/Product";
import UserLogin from "./Components/Main/Login-Signup/Login";
import UserSignUp from "./Components/Main/Login-Signup/UserSignUp";
import ProductNavigation from "./Components/Navigation/ProductNavigation";
import Cart from "./Components/Main/Cart/Cart";
import Order from "./Components/Main/Cart/Order";

function App() {
  return (
    <div className="App">
      {/* Component Name */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/userregistration" element={<UserSignUp />} />
          <Route path="/productpage" element={<Product />} />
          <Route
            path="/productnavigation"
            element={<ProductNavigation />}
          ></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
