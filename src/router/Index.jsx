import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import HomePage from '../components/HomePage';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <div>tran web bị lỗi</div>,
      children: [
        {
          path: "/homePage",
          element: <HomePage />,
        },
      ],
    },
  ]);
  export default router


