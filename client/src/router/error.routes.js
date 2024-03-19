import Error404 from "../components/Errors/NotFound.jsx";
import Error403 from "../components/Errors/Forbidden.jsx";
const errorRoutes = [
  {
    path: "*",
    Component: Error404,
  },
  {
    path: "/forbidden",
    Component: Error403,
  },
];

export default errorRoutes;
