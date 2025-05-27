import { Routes, Route } from "react-router-dom";
import "nprogress/nprogress.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Predict from "./pages/Predict";
import PrivateRoute from "./components/PrivateRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/predict"
        element={
          <PrivateRoute>
            <Predict />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Router;
