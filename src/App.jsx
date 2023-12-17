import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Shop />} />
      {/* <Route path="/shop" element={<Shop />} /> */}

      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
