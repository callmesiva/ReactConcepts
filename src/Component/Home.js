import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-96 p-3 m-auto mt-5">
      <h2 className="text-center">Welcome Home</h2>
      <div className="flex flex-col gap-5 border-2 p-5 m-5 text-center text-white mx-auto">
        <Link to={"/StateManagement"} className="rounded-md p-1 bg-blue-500">
          State Management
        </Link>
        <Link
          to={"/ConditionalRendering"}
          className="rounded-md p-1 bg-blue-500"
        >
          Conditional Rendering
        </Link>
        <Link to={"/Form"} className="rounded-md p-1 bg-blue-500">
          Form
        </Link>
        <Link
          to={"/HigherOrderComponent"}
          className="rounded-md p-1 bg-blue-500"
        >
          Higher Order Component
        </Link>
        <Link to={"/UseEffect"} className="rounded-md p-1 bg-blue-500">
          UseEffect
        </Link>
        <Link to={"/UseMemo"} className="rounded-md p-1 bg-blue-500">
          UseMemo
        </Link>
        <Link to={"/OptimisticUI"} className="rounded-md p-1 bg-blue-500">
          OptimisticUI
        </Link>

        <Link to={"/LiftingStateUp"} className="rounded-md p-1 bg-blue-500">
          LiftingStateUp
        </Link>
        <Link to={"/ContextAPI"} className="rounded-md p-1 bg-blue-500">
          ContextAPI
        </Link>
        <Link to={"/ErrorB"} className="rounded-md p-1 bg-blue-500">
          Error Boundary
        </Link>
        <Link to={"/ProtectedRoutes"} className="rounded-md p-1 bg-blue-500">
          Protected Routes
        </Link>
        <Link to={"/LazyLoading"} className="rounded-md p-1 bg-blue-500">
          LazyLoading
        </Link>
      </div>
    </div>
  );
};

export default Home;
