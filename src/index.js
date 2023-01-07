import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BlogPage from './Pages/BlogPage';
import NavBar from './Components/NavBar';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "blog",
    element: <BlogPage/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
