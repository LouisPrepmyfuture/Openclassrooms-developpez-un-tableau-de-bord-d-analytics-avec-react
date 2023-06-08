import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home.jsx';
import Dashboard from './pages/dashboard.jsx';
import ErrorPage from './pages/error-page.jsx'
import "./assets/styles/base.css"
import { createBrowserRouter, RouterProvider, } from "react-router-dom";


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
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);