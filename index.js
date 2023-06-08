import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SecondPage from './Component/SecondPage';
import Final from './Component/Membership';
import FourthPage from './Component/FourthPage';
import Finals from './Component/final';
import Login from './Component/Login';
import Thanks from './Component/Thanks';
import Signup from './Component/Signup';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ThirdPage from './Component/ThirdPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/second",
    element: <SecondPage/>,
  },
  {
    path: "/Threee",
    element: <ThirdPage/>,
  },
  {
    path: "/four",
    element: <FourthPage/>,
  },
  {
    path:"/Finals",
    element: <Finals/>,
  },
  {
    path: "/five",
    element: <Login/>,
  },
  {
    path:"/COD",
    element: <Thanks/>,
  },
  {
    path:"/PAY",
    element:<Finals/>,
  },
  {
    path:"/Six",
    element:<Signup/>,
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
