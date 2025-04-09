import Main from "@/layout/Main";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <div>hello</div>,
      },
    ],
  },
]);

export default router;
