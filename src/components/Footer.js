import React from "react"
import styled from "styled-components"

const Wrapper = styled.footer`
  display: grid;
  grid-template-columns: auto;
  grid-gap: ${props => props.theme.padding};
  padding: ${props => props.theme.padding};
  color: ${props => props.theme.colorDark};
  background: ${props => props.theme.backgroundFooter};
  font-size: ${props => props.theme.fontSmall};
  text-align: center;
  font-weight: lighter;
  letter-spacing: -0.68px;

  @media screen and (min-width: 576px) {
    text-align: right;
  }
`

const Footer = () => (
  <Wrapper>
    <div>{`Copyright © ${new Date().getFullYear()} Benjamin Geck`}</div>
  </Wrapper>
)

export default Footer
