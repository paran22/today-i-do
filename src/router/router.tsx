import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import WriteBoardPage from "../pages/WriteBoardPage";
import BoardDetailPage from "../pages/BoardDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/boards/write",
        element: <WriteBoardPage />,
      },
      {
        path: "/boards/:boardId",
        element: <BoardDetailPage />,
      },
    ],
  },
]);