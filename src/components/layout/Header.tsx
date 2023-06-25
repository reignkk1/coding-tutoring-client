import { Link, useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";
import { singout } from "../../api/auth";

import { TbMessageCircle } from "react-icons/tb";

const Head = styled.header`
  width: 100%;
  height: 65px;

  position: fixed;

  background-color: #0e1620;
  border-bottom: 1px solid #4f504f;

  z-index: 100;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-inline: auto;
`;

const Logo = styled.h1`
  font-family: regular;
  font-size: 22px;
  color: #c9fd35;
`;

const Nav = styled.nav`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Sign = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavItem = styled.li`
  font-family: light;
  color: #ffffff;

  cursor: pointer;
  &:hover {
    color: #c9fd35;
  }

  .icon {
    font-size: 1.4rem;
    font-family: regular;
    color: #ffffff;
  }
`;

export default function Header() {
  const token = useRouteLoaderData("root");
  const menu = [
    { item: "선생님 찾기", to: "/teachers" },
    { item: "학생 찾기", to: "/students" },
    { item: "글 작성", to: "/write" },
    { item: "공지사항", to: "/notice" },
  ];

  return (
    <Head>
      <Container>
        <Nav>
          <Link to="/">
            <Logo>코딩바다</Logo>
          </Link>
          {menu.map((list) => (
            <Link key={list.item} to={list.to}>
              <NavItem>{list.item}</NavItem>
            </Link>
          ))}
        </Nav>
        <Sign>
          <Link to="/notes">
            <NavItem>
              <TbMessageCircle className="icon" />
            </NavItem>
          </Link>
          <Link to="/view/me">
            <NavItem>마이페이지 </NavItem>
          </Link>
          {!token ? (
            <Link to="/signin">
              <NavItem>로그인</NavItem>
            </Link>
          ) : (
            <NavItem onClick={singout}>로그아웃</NavItem>
          )}
        </Sign>
      </Container>
    </Head>
  );
}
