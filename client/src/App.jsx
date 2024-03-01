import Navbar from "./components/Navbar";
import { Suspense } from "react";
import Loading from "./components/Loading";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="row justify-content-md-center mt-2">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
