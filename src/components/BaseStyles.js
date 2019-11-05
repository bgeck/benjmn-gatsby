import { createGlobalStyle } from "styled-components"
import reset from "styled-reset-advanced"

const BaseStyles = createGlobalStyle`
  ${reset}
  body {
    line-height: initial;
    background: ${props => props.theme.background};
  }

  p {
    margin: 0.75rem 0;
  }

  h1 {
    font-size: ${props => props.theme.fontH1};
    font-weight: bold;
    letter-spacing: -1.2px;
    font-kerning: none;
  }

  h2 {
    font-size: ${props => props.theme.fontH2};
  }

  h3 {
    font-size: ${props => props.theme.fontH3};
  }

  h4 {
    font-size: ${props => props.theme.fontH4};
  }

  hr {
    border: 1px solid transparent;
    border-top-color: ${props => props.theme.colorDark};
    width: 100%;
  }
`

export default BaseStyles
