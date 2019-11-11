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
  backdrop-filter: blur(10.25px) url(#filter);
`

const Brand = styled.div`
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: -1.5px;

  @media screen and (min-width: 365px) {
    font-size: 1.5rem;
  }
`

const Menu = styled.h3`
  font-size: 1.15rem;

  a + a {
    margin-left: 0.45rem;
  }

  @media screen and (min-width: 365px) {
    font-size: 1.25rem;

    a + a {
      margin-left: ${props => props.theme.padding};
    }
  }
`

const Header = () => (
  <Wrapper>
    <svg style={{ display: "none" }}>
      <filter id="filter" x="0" y="0" width="100%" height="100%">
        <feTurbulence
          id="turbulence"
          numOctaves="3"
          seed="2"
          baseFrequency="0.0125 0.0125"
        ></feTurbulence>
        <feDisplacementMap scale="12" in="SourceGraphic"></feDisplacementMap>
      </filter>
    </svg>

    <Link to={"/"}>
      <Brand>Benjamin Geck</Brand>
    </Link>

    <Menu>
      <Link to="/posts">Posts</Link>
      <Link to="/about">About</Link>
      <a href="/contact">Contact</a>
    </Menu>
  </Wrapper>
)

export default Header
