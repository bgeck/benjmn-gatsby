import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import reset from "styled-reset-advanced"
import theme from "../helpers/theme"
// import "../helpers/prism.css"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import Seo from "./Seo"

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

const Layout = ({ children, pageContext }) => {
  return (
    <ThemeProvider theme={Object.assign({}, theme.common, theme.light)}>
      <Seo title={pageContext.frontmatter.title} />
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
