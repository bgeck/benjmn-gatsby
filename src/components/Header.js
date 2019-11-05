import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
// import Menu from "./menu"

const Wrapper = styled.header`
  display: grid;
  position: fixed;
  grid-template-columns: 1fr;
  grid-gap: ${props => props.theme.padding};
  color: ${props => props.theme.colorLight};
  padding: ${props => props.theme.padding};
  background: ${props => props.theme.backgroundHeader};
  width: 100%;
`

const Brand = styled.div`
  font-size: 1.5rem;
  font-weight: lighter;
  margin-top: 0.22rem;
  letter-spacing: -1.5px;
  font-kerning: none;
`

const Header = () => (
  <Wrapper>
    <Link to={"/"}>
      <Brand>Benjamin Geck</Brand>
    </Link>
    {/* <Menu align="right" /> */}
  </Wrapper>
)

export default Header
