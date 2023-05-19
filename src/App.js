import React from "react";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";

const Home = React.lazy(() => import("./Pages/Home"));
const Addandupdate = React.lazy(() => import("./Pages/Addandupdate"));

const router = createBrowserRouter([
  {
    path: "/addrecord",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Addandupdate />
      </Suspense>
    ),
  },
  {
    path: "/updaterecord/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Addandupdate />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
