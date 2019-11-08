import { createGlobalStyle } from "styled-components"
import reset from "styled-reset-advanced"

const BaseStyles = createGlobalStyle`
  ${reset}
  body {
    line-height: initial;
    background: ${props => props.theme.background};
    background-size: 100% 90vw;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  p {
    margin: 0.75rem 0;
  }

  pre {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    white-space: normal;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  h1 {
    font-size: ${props => props.theme.fontH1};
    font-weight: bolder;
    letter-spacing: -1.2px;
  }

  h2 {
    font-size: ${props => props.theme.fontH2};
    font-weight: bolder;
    letter-spacing: -1.2px;
  }

  h3 {
    font-size: ${props => props.theme.fontH3};
    font-weight: bolder;
    letter-spacing: -1px;
  }

  h4 {
    font-size: ${props => props.theme.fontH4};
    font-weight: bolder;
    letter-spacing: -1px;
  }

  h5 {
    font-size: ${props => props.theme.fontH5};
    font-weight: normal;
    letter-spacing: -1px;
  }

  h6 {
    font-size: ${props => props.theme.fontH6};
    font-weight: lighter;
    letter-spacing: -1px;
  }

  hr {
    border: 1px solid transparent;
    border-top-color: ${props => props.theme.colorMid};
    width: 100%;
    margin: 0.665rem 0 1.665rem;
  }

  .hero {
    margin: -1.245rem -1.245rem 1.665rem;
  }

  @media screen and (min-width: 576px) {
    .inline-left {
      width: 50%;
      float: left;
      margin: 0.45rem 1.365rem 0.665rem 0;
    }

    .inline-right {
      width: 50%;
      float: right;
      margin: 0.45rem 0 0.665rem 1.365rem;
    }
  }
`

export default BaseStyles
