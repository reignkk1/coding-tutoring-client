import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Notice from "./pages/Notice";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";
import FindPage from "./pages/FindPage";
import PostDetail from "./pages/PostDetail";
import Write from "./pages/Write";
import Signin from "./pages/SignIn";
import Signup from "./pages/SignUp";
import FindPwd from "./pages/FindPwd";

import GlobalStyles from "./styles/GlobalStyles";
import NoticeWrite from "./pages/NoticeWrite";
import NoticeDetail from "./pages/NoticeDetail";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/help/user",
          element: <FindPwd />,
        },

        {
          path: "/teachers",
          element: <FindPage category="teachers" />,
        },
        {
          path: "/students",
          element: <FindPage category="students" />,
        },
        {
          path: "/teachers/post/:postId",
          element: <PostDetail category="teachers" />,
        },
        {
          path: "/students/post/:postId",
          element: <PostDetail category="students" />,
        },
        {
          path: "/notice/post/:postId",
          element: <NoticeDetail />,
        },
        {
          path: "/notice",
          element: <Notice />,
        },
        {
          path: "/view/:me",
          element: <MyPage />,
        },
        {
          path: "/view/:userId",
          element: <MyPage />,
        },
        {
          path: "/write",
          element: <Write />,
        },
        {
          path: "/notice/write",
          element: <NoticeWrite />,
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
