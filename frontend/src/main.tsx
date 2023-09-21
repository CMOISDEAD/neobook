import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root.tsx";
import { Preview } from "./routes/Preview.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/file/:file",
        element: <Preview />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
