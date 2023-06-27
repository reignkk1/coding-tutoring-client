import { Link, useRouteLoaderData } from "react-router-dom";
import { useState } from "react";
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
  console.log(open);
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
        <ToggleBtn onClick={() => setOpen((open) => !open)}>
          <HiMenu />
        </ToggleBtn>
        <Link to="/">
          <Logo>코딩바다</Logo>
        </Link>
        <NavContainer className={`${open && "open"}`}>
          <Nav>
            <ul>
              {menu.map((list) => (
                <NavItem>
                  <Link key={list.item} to={list.to}>
                    {list.item}
                  </Link>
                </NavItem>
              ))}
            </ul>
          </Nav>
          <Nav>
            <ul>
              <NavItem>
                <Link to="/notes">쪽지</Link>
              </NavItem>
              <NavItem>
                <Link to="/view/me">마이페이지</Link>
              </NavItem>
              {!token ? (
                <NavItem>
                  <Link to="/signin">로그인</Link>
                </NavItem>
              ) : (
                <NavItem onClick={signout}>로그아웃</NavItem>
              )}
            </ul>
          </Nav>
        </NavContainer>
      </Container>
    </Head>
  );
}
