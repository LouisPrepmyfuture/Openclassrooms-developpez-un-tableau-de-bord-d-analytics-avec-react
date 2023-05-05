import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './App/home.jsx';
import Dashboard from './App/dashboard.jsx';
import ErrorPage from './App/error-page.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
		errorElement: <ErrorPage />,
	},
  {
    path: "/dashboard/:id",
    element: <Dashboard />,
		errorElement: <ErrorPage />,
	},
  {
    path: "/error",
    element: <ErrorPage />,
		errorElement: <ErrorPage />,
	}
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode>
);