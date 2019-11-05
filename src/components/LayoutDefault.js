import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import theme from "../helpers/theme"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import Prism from "./Prism"
import Seo from "./Seo"
import BaseStyles from "./BaseStyles"

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  font-family: ${theme.common.font};
  letter-spacing: ${theme.common.letterSpacing};
  color: ${props => props.theme.colorDark};
`

const LayoutDefault = ({ children, pageContext }) => {
  return (
    <ThemeProvider theme={Object.assign({}, theme.common, theme.light)}>
      <Seo title={pageContext.frontmatter.title} />
      <BaseStyles />
      <Wrapper>
        <Header />
        <Content>
          <MDXProvider
            components={{
              code: Prism,
              inlineCode: Prism,
            }}
          >
            {children}
          </MDXProvider>
        </Content>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default LayoutDefault
