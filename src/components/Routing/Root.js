import React, { Suspense, lazy } from "react";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

// Lazy Loading Implementation

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const Root = () => {
  const Layout = () => {
    return (
      <div>
        <nav>
          Welcome to Route Navigation
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/home",
      element: (
        <Suspense fallback="...Loading">
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/aboutus",
      element: (
        <Suspense fallback="...Loading">
          <About />
        </Suspense>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Root;
