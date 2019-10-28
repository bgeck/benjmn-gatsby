import React from "react"
import styled from "styled-components"
// import Menu from "./menu"

const Wrapper = styled.header`
  /* display: grid;
  position: fixed;
  grid-template-columns: 1fr auto;
  grid-gap: ${props => props.theme.padding};
  color: ${props => props.theme.colorLight};
  padding: ${props => props.theme.padding};
  background: ${props => props.theme.backgroundHeader};
  box-shadow: ${props => props.theme.shadowDown};
  width: calc(100% - (${props => props.theme.padding} * 2)); */
`

const Brand = styled.div`
  font-size: 1.25rem;
  /* margin-top: 0.22rem; */
`

const Header = () => (
  <Wrapper>
    <Brand>Benjamin Geck</Brand>
    {/* <Menu align="right" /> */}
  </Wrapper>
)

export default Header
