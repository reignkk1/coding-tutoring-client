import { Link, useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";
import { user } from "./../../UserData";
import { singout } from "../../api/auth";

const Container = styled.header`
  width: 100%;
  height: 65px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  background-color: white;
  z-index: 98;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  padding: 25px 0px;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 22px;
  color: #00c000;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;

  margin-right: 30px;
`;

const MenuItem = styled.li`
  color: black;
  font-weight: bold;
  cursor: pointer;

  margin-right: 30px;

  &:hover {
    color: #00c000;
  }
`;

export default function Header() {
  const token = useRouteLoaderData("root");
  const menu = [
    { item: "선생님 찾기", to: "/teachers" },
    { item: "학생 찾기", to: "/students" },
    { item: "공지사항", to: "/notice" },
    { item: "글 작성", to: user.isLogin ? "/write" : "/signin" },
  ];

  return (
    <Container>
      <NavBar>
        <Link to="/">
          <Logo>과외바다</Logo>
        </Link>
        <Menu>
          {menu.map((list) => (
            <Link key={list.item} to={list.to}>
              <MenuItem>{list.item}</MenuItem>
            </Link>
          ))}
          {!token ? (
            <Link to="/signin">
              <MenuItem>로그인</MenuItem>
            </Link>
          ) : (
            <MenuItem onClick={singout}>로그아웃</MenuItem>
          )}

          <Link to="/view/me">
            <MenuItem>마이페이지 </MenuItem>
          </Link>
        </Menu>
      </NavBar>
    </Container>
  );
}
