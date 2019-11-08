import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import theme from "../helpers/theme"
import Header from "./Header"
import PostList from "./PostList"
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

  .callout {
    position: relative;

    @media screen and (min-width: 576px) {
      margin-top: -4.595rem;
    }
  }

  .heading {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    background: radial-gradient(ellipse at top, #b67754, transparent),
      radial-gradient(ellipse at bottom, #5493b6, transparent);
    margin: 0 -1.245rem;
    padding: 1.665rem;

    h1 {
      font-size: 5vmax;
    }

    h2 {
      font-size: 3vmax;
    }
  }

  /* override gatsby-remark-image plugin */
  .hero > span {
    max-width: 100% !important;
  }

  .skills {
    display: grid;
    grid-gap: 3.245rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

const LayoutHome = ({ children, pageContext }) => {
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
        <Header className="home-light" />
        <Content alignStart>
          <MDXProvider
            components={{
              code: Prism,
              inlineCode: Prism,
            }}
          >
            {children}
          </MDXProvider>
        </Content>
        <PostList recent />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default LayoutHome
