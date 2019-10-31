import React from "react"
import styled from "styled-components"

const Wrapper = styled.footer`
  display: grid;
  grid-template-columns: auto;
  grid-gap: ${props => props.theme.padding};
  color: ${props => props.theme.colorLight};
  padding: ${props => props.theme.padding};
  background: ${props => props.theme.backgroundFooter};
  font-size: ${props => props.theme.fontSmall};
  text-align: right;
`

const Footer = () => (
  <Wrapper>
    <div>{`Copyright © ${new Date().getFullYear()} Benjamin Geck`}</div>
  </Wrapper>
)

export default Footer
