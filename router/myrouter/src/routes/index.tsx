import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import News from "../pages/homeNews";
import Messages from "../pages/homeMessages";
import MessageDetail from "../pages/messageDetail";
import NewsDetail from "../pages/newsDetail";

let  routes= [{
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "news",
        element: <News />,
        children: [
          {
            path: "detail",
            element: <NewsDetail />,
          },
        ],
      },
      {
        path: "messages",
        element: <Messages />,
        children: [
          {
            path: "detail/:id/:title/:content",
            element: <MessageDetail />,
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
export default routes
