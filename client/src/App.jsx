import Navbar from "./components/Navbar";
import { Suspense } from "react";
import Loading from "./components/Loading";
import { Outlet } from "react-router-dom";
import sesionStore from "./store/SesionStore";
const App = () => {
  const { isLoading } = sesionStore((state) => state);
  return (
    <div>
      <Navbar />
      <div className="row justify-content-md-center mt-2">
        {isLoading ? (
          <Loading />
        ) : (
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default App;
