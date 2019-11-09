import React, { useEffect } from "react"
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
`

const LayoutContact = ({ children, pageContext }) => {
  // TypeForm Loader
  useEffect(() => {
    var js
    var q
    var d = document
    var gi = d.getElementById
    var ce = d.createElement
    var gt = d.getElementsByTagName
    var id = "typef_orm"
    var b = "https://embed.typeform.com/"

    if (!gi.call(d, id)) {
      js = ce.call(d, "script")
      js.id = id
      js.src = b + "embed.js"
      q = gt.call(d, "script")[0]
      q.parentNode.insertBefore(js, q)
    }
  }, [])

  return (
    <ThemeProvider
      theme={Object.assign(
        { columns: pageContext.frontmatter.columns },
        theme.common,
        theme.light
      )}
    >
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

export default LayoutContact
