import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 65px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  background-color: white;
  z-index: 999;
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

  a {
    margin-right: 30px;
  }
`;

const MenuItem = styled.li`
  color: black;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #00c000;
  }
`;

export default function Header() {
  const menu = [
    { item: "공지사항", to: "/notice" },
    { item: "선생님 찾기", to: "/teachers" },
    { item: "학생 찾기", to: "/students" },
    { item: "로그인", to: "/signin" },
    { item: "회원가입", to: "/signup" },
  ];

  return (
    <Container>
      <NavBar>
        <Link to="/">
          <Logo>과외바다</Logo>
        </Link>
        <Menu>
          {menu.map((list) => (
            <Link to={list.to}>
              <MenuItem>{list.item}</MenuItem>
            </Link>
          ))}
        </Menu>
      </NavBar>
    </Container>
  );
}
