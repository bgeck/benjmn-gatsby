import React, { Fragment } from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import reset from "styled-reset-advanced"
// import theme from "../helpers/theme"
// import "../helpers/prism.css"
// import Header from "../components/header"
// import Content from "../components/content"
// import Footer from "../components/footer"

const BaseStyles = createGlobalStyle`
  ${reset}
  /* html, 
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  } */
`

const Wrapper = styled.div`
  /* height: 100%;
  display: grid;
  grid-template-rows: auto 1fr; */
  font-family: sans-serif;
  letter-spacing: 0.0063rem;
`

const Layout = ({ children }) => {
  return (
    <Fragment>
      <BaseStyles />
      <ThemeProvider theme={{ color: "white" }}>
        <Wrapper>
          <div>header</div>
          <div>{children}</div>
          <div>footer</div>
        </Wrapper>
      </ThemeProvider>
    </Fragment>
  )
}

export default Layout
