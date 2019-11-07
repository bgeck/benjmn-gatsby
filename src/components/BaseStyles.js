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
    font-kerning: none;
  }

  h2 {
    font-size: ${props => props.theme.fontH2};
    font-weight: bolder;
    letter-spacing: -1.2px;
    font-kerning: none;
  }

  h3 {
    font-size: ${props => props.theme.fontH3};
    font-weight: bolder;
    letter-spacing: -1px;
    font-kerning: none;
  }

  h4 {
    font-size: ${props => props.theme.fontH4};
    font-weight: bolder;
    letter-spacing: -1px;
    font-kerning: none;
  }

  h5 {
    font-size: ${props => props.theme.fontH5};
    font-weight: normal;
    letter-spacing: -1px;
    font-kerning: none;
  }

  h6 {
    font-size: ${props => props.theme.fontH6};
    font-weight: lighter;
    letter-spacing: -1px;
    font-kerning: none;
  }

  hr {
    border: 1px solid transparent;
    border-top-color: ${props => props.theme.colorMid};
    width: 100%;
    margin: 0.665rem 0 1.665rem;
  }

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
`

export default BaseStyles
