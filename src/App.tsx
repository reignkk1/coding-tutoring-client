import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import Notice from "./pages/Notice";
import TeacherDetail from "./pages/TeacherDetail";
import StudentDetail from "./pages/StudentDetail";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/user/:userId",
      element: <User />,
    },
    {
      path: "/teachers",
      element: <Teachers />,
    },
    {
      path: "/students",
      element: <Students />,
    },
    {
      path: "/notice",
      element: <Notice />,
    },
    {
      path: "/teachers/:postId",
      element: <TeacherDetail />,
    },
    {
      path: "/students/:postId",
      element: <StudentDetail />,
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
