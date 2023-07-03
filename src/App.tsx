import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import UserPage from "./pages/UserPage";
import Notice from "./pages/Notice";
import NotFound from "./pages/NotFound";
import PostDetail from "./pages/PostDetail";
import Write from "./pages/Write";
import Notes from "./pages/Notes";
import Signin from "./pages/Signin";
import Signup from "./pages/SignUp";
import FindPwd from "./pages/FindPwd";

import GlobalStyles from "./styles/GlobalStyles";
import NoticeWrite from "./pages/NoticeWrite";
import NoticeDetail from "./pages/NoticeDetail";
import ScrollToTop from "./util/ScrollToTop";

import { tokenLoader } from "./util/sign/auth";
import { checkAuthLoader } from "./util/sign/auth";
import { AuthContextProvider } from "./context/AuthContext";
import NoticeEdit from "./pages/NoticeEdit";
import FindPageEdit from "./pages/FindPageEdit";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import ProfileUpdate from "./pages/ProfileUpdate";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: [<RootLayout />, <ScrollToTop />],

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
        {
          path: "/help/user",
          element: <FindPwd />,
        },

        {
          path: "/teacher",
          element: <Teachers />,
        },
        {
          path: "/student",
          element: <Students />,
        },
        {
          path: "/teachers/post/:postId",
          element: <PostDetail category="teacher" />,
        },
        {
          path: "/teachers/post/:postId/edit",
          element: <FindPageEdit category="teacher" />,
        },
        {
          path: "/students/post/:postId",
          element: <PostDetail category="student" />,
        },
        {
          path: "/students/post/:postId/edit",
          element: <FindPageEdit category="student" />,
        },
        {
          path: "/notice/post/:postId",
          element: <NoticeDetail />,
        },
        {
          path: "/notice/post/:postId/edit",
          element: <NoticeEdit />,
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
          path: "/profile/update",
          element: <ProfileUpdate />,
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
        {
          path: "/notes",
          element: <Notes />,
          loader: checkAuthLoader, //라우트 보호
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <AuthContextProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
