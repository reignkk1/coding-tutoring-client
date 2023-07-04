import { Link, useRouteLoaderData } from "react-router-dom";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { signout } from "../../api/auth";

import { HiMenu } from "react-icons/hi";

const Head = styled.header`
  width: 100%;
  height: 65px;

  position: fixed;
  top: 0;

  background-color: #0e1620;
  border-bottom: 1px solid #4f504f;

  z-index: 100;
`;

const Container = styled.nav`
  width: 100%;
  height: 100%;
  max-width: 1200px;

  display: flex;
  justify-content: space-between;

  align-items: center;

  margin-inline: auto;
  padding-inline: 2rem;

  transition: all 0.3s ease-in-out;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
    padding-inline: 0;
  }
`;

const Logo = styled.h1`
  font-family: regular;
  font-size: 22px;
  color: #c9fd35;

  @media (max-width: 850px) {
    height: 65px;
    padding-inline: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ToggleBtn = styled.button`
  display: none;
  position: absolute;
  top: 1.3rem;
  right: 1rem;
  font-size: 1.4rem;

  background-color: transparent;
  color: white;

  @media (max-width: 850px) {
    display: block;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  transition: all 0.3s ease-out;

  @media (max-width: 850px) {
    display: none;
    background-color: #0e1620;

    &.open {
      display: flex;
      flex-direction: column;
      padding-block: 4rem;
      gap: 1.5rem;
      border-bottom: 1px solid #4f504f;
    }
  }
`;

const Nav = styled.div`
  flex-shrink: 0;

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  @media (max-width: 850px) {
    ul {
      flex-direction: column;
      width: 100vw;
    }
  }
`;

const NavItem = styled.li`
  font-family: light;
  color: #ffffff;

  cursor: pointer;

  a {
    font-size: 1rem;
  }

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
  const [open, setOpen] = useState(false);

  const token = useRouteLoaderData("root");
  const menu = [
    { item: "선생님 찾기", to: "/teacher" },
    { item: "학생 찾기", to: "/student" },
    { item: "요청 작성", to: "/write" },
    { item: "공지사항", to: "/notice" },
  ];
  const handleOpen = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return (
    <Head>
      <Container>
        <ToggleBtn onClick={handleOpen}>
          <HiMenu />
        </ToggleBtn>
        <Link to="/">
          <Logo>코딩바다</Logo>
        </Link>
        <NavContainer className={`${open && "open"}`}>
          <Nav>
            <ul>
              {menu.map((list) => (
                <NavItem key={list.item}>
                  <Link to={list.to} onClick={handleOpen}>
                    {list.item}
                  </Link>
                </NavItem>
              ))}
            </ul>
          </Nav>
          <Nav>
            <ul>
              <NavItem key="1">
                <Link to="/notes" onClick={handleOpen}>
                  쪽지
                </Link>
              </NavItem>
              <NavItem key="2">
                <Link to="/view/me" onClick={handleOpen}>
                  마이페이지
                </Link>
              </NavItem>
              {!token ? (
                <NavItem key="3">
                  <Link to="/signin" onClick={handleOpen}>
                    로그인
                  </Link>
                </NavItem>
              ) : (
                <NavItem key="4" onClick={signout}>
                  로그아웃
                </NavItem>
              )}
            </ul>
          </Nav>
        </NavContainer>
      </Container>
    </Head>
  );
}
