import { createGlobalStyle } from "styled-components"
import reset from "styled-reset-advanced"
import theme from "../helpers/theme"

const BaseStyles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,200;0,300;0,400;0,700;1,200;1,300;1,400;1,700&display=swap');
  body {
    line-height: initial;
    background: ${props => props.theme.background};
    background-size: 100% 90vw;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: ${theme.common.font};
    /* letter-spacing: ${theme.common.letterSpacing}; */
    color: ${props => props.theme.colorDark};
  }

  p {
    margin: 0.75rem 0;
  }

  pre {
    display: grid;
    -webkit-overflow-scrolling: touch;
    page-break-inside: avoid;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  h1 {
    font-size: ${props => props.theme.fontH1};
    font-weight: bolder;
    letter-spacing: -1.2px;
    margin: 0 0 0.665rem;
  }

  h2 {
    font-size: ${props => props.theme.fontH2};
    font-weight: normal;
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
    font-weight: light;
    letter-spacing: -1px;
  }

  hr {
    border: 1px solid transparent;
    border-top-color: ${props => props.theme.colorMid};
    width: 100%;
    margin: 0.665rem 0 1.665rem;
  }

  blockquote {
    border-left: 8px solid;
    border-left-color: ${props => props.theme.colorMid};
    background: ${props => props.theme.colorLight};
    padding: 0.665rem;
  }

  .hero {
    margin: -1.245rem -1.245rem 1.665rem;
  }

  .rounded, 
  .rounded p {
    border-radius: 1rem;
    overflow: hidden;
  }

  .auto-grid {
    display:grid;
    grid-gap: 1.665rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    
    .gatsby-resp-image-wrapper {
      width: 100%;
      height: fit-content;
    }
  }

  @media screen and (min-width: 1024px) {
    .fixed-width {
      max-width: 1024px;
      margin: 0 auto;
    }
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
