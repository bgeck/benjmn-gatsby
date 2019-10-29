import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import reset from "styled-reset-advanced"
import theme from "../helpers/theme"
// import "../helpers/prism.css"
import Header from "../components/header"
import Content from "../components/content"
import Footer from "../components/footer"

const BaseStyles = createGlobalStyle`
  ${reset}
  body {
    line-height: initial;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  font-family: ${theme.common.font};
  letter-spacing: ${theme.common.letterSpacing};
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Object.assign({}, theme.common, theme.light)}>
      <BaseStyles />
      <Wrapper>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
