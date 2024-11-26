import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Products from "./Components/Prodcuts/Products";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ProductDatils from "./Components/ProductDatils/ProductDatils";
import store from "./Redux/store";
import { Provider } from "react-redux";
import Checkout from "./Components/Checkout/Checkout";
import AuthContextProvider from "./context/AuthContextProvider";
import ProtectedApp from "./Components/ProtectedApp/ProtectedApp";

const route = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element:<ProtectedApp> <Home /></ProtectedApp>  },
      { path: "Product", element:<ProtectedApp><Products /></ProtectedApp>  },
      { path: "datils/:id", element:<ProtectedApp><ProductDatils /></ProtectedApp>  },
      { path: "about", element:<ProtectedApp><About /></ProtectedApp> },
      { path: "contact", element:<ProtectedApp><Contact /></ProtectedApp>  },
      { path: "cart", element:<ProtectedApp><Cart /></ProtectedApp>  },
      { path: "/Checkout", element:<ProtectedApp><Checkout /></ProtectedApp>  },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "*", element:<ProtectedApp><NotFound /></ProtectedApp>  },
    ],
  },
]);
const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={route} />
            <Toaster />
          </QueryClientProvider>
        </AuthContextProvider>
      </Provider>
    </>
  );
}
