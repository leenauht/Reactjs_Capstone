import { Route } from "react-router-dom";
import AdminTemPlate from "../pages/AdminTemplate";
import UserTemplate from "../pages/UserTemplate";
import HomePage from "../pages/UserTemplate/HomePage";
import DashBoardPage from "../pages/AdminTemplate/DashBoardPage";
import ListMoviePage from "../pages/UserTemplate/ListMoviePage";

const routes = [
  {
    path: "",
    element: UserTemplate,
    children: [
      {
        path: "",
        element: HomePage,
      },
      {
        path: "list-movie",
        element: ListMoviePage,
      },
    ],
  },
  {
    path: "admin",
    element: AdminTemPlate,
    children: [
      {
        path: "dashboard",
        element: DashBoardPage,
      },
    ],
  },
];

export const renderRoutes = () => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.children.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};
