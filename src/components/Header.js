import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.header`
  display: grid;
  position: fixed;
  z-index: 1;
  grid-template-columns: auto 1fr;
  align-items: baseline;
  grid-gap: 1.06rem;
  padding: ${props => props.theme.padding};
  color: ${props => props.theme.colorDark};
  background: ${props => props.theme.backgroundHeader};
  width: 100%;
  backdrop-filter: blur(10.25px);
`

const Brand = styled.div`
  font-size: 1.5rem;
  font-weight: lighter;
  margin-top: 0.22rem;
  letter-spacing: -1.5px;
  font-kerning: none;
`

const Menu = styled.h3`
  a + a {
    margin-left: ${props => props.theme.padding};
  }
`

const Header = () => (
  <Wrapper>
    <Link to={"/"}>
      <Brand>Benjamin Geck</Brand>
    </Link>

    <Menu>
      <Link to={"/posts"}>Posts</Link>
      <a href={"/contact"}>Contact</a>
    </Menu>
  </Wrapper>
)

export default Header
