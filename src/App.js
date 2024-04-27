import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { DataProvider } from "./Component/ContextAPI/Context";
import ErrorBoundary from "./Component/Error/ErrorBoundary";
import Error from "./Component/Error/Error";
import ProtectedRoute from "./Component/ProtectedRoutes/ProtectedRoute";

import Home from "./Component/Home";
import StateManagement from "./Component/StateManagement";
import ConditionalRendering from "./Component/ConditionalRendering";
import Form from "./Component/Form";
import HigherOrderComponent from "./Component/HigherOrderComponent/Parent";
import UseEffect from "./Component/UseEffect";
import UseMemo from "./Component/UseMemo";
import OptimisticUI from "./Component/OptimisticUI";
import LiftingStateUp from "./Component/LiftingStateUp/LiftingStateUp";
import ContextAPI from "./Component/ContextAPI/ContextAPI";
import ErrorB from "./Component/Error/ErrorB";
import ProtectedRoutes from "./Component/ProtectedRoutes/ProtectedRoutes";
import Profile from "./Component/ProtectedRoutes/Profile";
import About from "./Component/ProtectedRoutes/About";
import Contact from "./Component/ProtectedRoutes/Contact";

const LazyLoading = lazy(() => import("./Component/LazyLoading"));

const AppLayout = () => (
  <DataProvider>
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  </DataProvider>
);

const AppProvider = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/StateManagement",
        element: <StateManagement />,
      },
      {
        path: "/ConditionalRendering",
        element: <ConditionalRendering />,
      },
      {
        path: "/Form",
        element: <Form />,
      },
      {
        path: "/HigherOrderComponent",
        element: <HigherOrderComponent />,
      },
      {
        path: "/UseEffect",
        element: <UseEffect />,
      },
      {
        path: "/UseMemo",
        element: <UseMemo />,
      },
      {
        path: "/OptimisticUI",
        element: <OptimisticUI />,
      },
      {
        path: "/LiftingStateUp",
        element: <LiftingStateUp />,
      },
      {
        path: "/ContextAPI",
        element: <ContextAPI />,
      },
      {
        path: "/ErrorB",
        element: <ErrorB />,
      },
      {
        path: "/ProtectedRoutes",
        element: <ProtectedRoutes />,
        children: [
          {
            element: <ProtectedRoute />,
            children: [
              {
                path: "profile",
                element: <Profile />,
              },
              {
                path: "about",
                element: <About />,
              },
              {
                path: "contact",
                element: <Contact />,
              },
            ],
          },
        ],
      },
      {
        path: "/LazyLoading",
        element: (
          <Suspense
            fallback={<h4 className="mt-10 text-center m-auto">Loading...</h4>}
          >
            <LazyLoading />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppProvider} />);
