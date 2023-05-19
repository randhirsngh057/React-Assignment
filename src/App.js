import React from "react";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import "./Utils/style/style.css";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const Home = React.lazy(() => import("./Pages/Home"));
const Addandupdate = React.lazy(() => import("./Pages/Addandupdate"));

const router = createBrowserRouter([
  {
    path: "/addrecord",
    element: (
      <Suspense fallback={<Loader />}>
        <Header />
        <Addandupdate />
        <Footer />
      </Suspense>
    ),
  },
  {
    path: "/updaterecord/:id",
    element: (
      <Suspense fallback={<Loader />}>
        <Header />
        <Addandupdate />
        <Footer />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Header />
        <Home />
        <Footer />
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
