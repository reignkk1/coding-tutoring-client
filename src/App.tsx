import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import UserPage from "./pages/UserPage";
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
import ScrollToTop from "./util/ScrollToTop";

import { tokenLoader } from "./util/sign/auth";
import { action as logoutAction } from "./pages/Logout";
import { checkAuthLoader } from "./util/sign/auth";
import { AuthContextProvider } from "./context/AuthContext";

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
      element: [<Layout />, <ScrollToTop />],

      errorElement: <NotFound />,
      id: "root",
      loader: tokenLoader,
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
        { path: "/logout", action: logoutAction },
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
          path: "/view/me",
          element: <MyPage />,
          loader: checkAuthLoader, //라우트 보호
        },
        {
          path: "/view/:userId",
          element: <UserPage />,
        },
        {
          path: "/write",
          element: <Write />,
          loader: checkAuthLoader,
        },
        {
          path: "/notice/write",
          element: <NoticeWrite />,
        },
      ],
    },
  ]);

  return (
    <AuthContextProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
