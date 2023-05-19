import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addandupdate from './Addandupdate';

const router = createBrowserRouter([
  {
    path: "/addrecord",
    element: <Addandupdate/>,
  },
  {
    path: "/updaterecord/:id",
    element: <Addandupdate/>,
  },
  {
    path: "/",
    element: <Table />,
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
