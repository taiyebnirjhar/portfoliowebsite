import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import Root from "../Pages/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project-details/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://portfolio-delta-lac-67.vercel.app/projects/${params.id}`
          );
        },
        element: <ProjectDetails />,
      },
    ],
  },
]);

export default router;
