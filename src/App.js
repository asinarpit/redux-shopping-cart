import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="">
      <div className="bg-blue-950">
        <Navbar />
      </div>

      {/* Routes */}

      <Routes>
        {/* home page */}
        <Route index path="*" element={<Home />}/>

        {/* cart page  */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
