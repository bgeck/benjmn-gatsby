import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: auto;
  align-items: center;
  justify-content: center;
  grid-gap: ${props => props.theme.padding};
  padding: ${props => props.theme.padding};
  color: ${props => props.theme.colorDark};
  background: ${props => props.theme.backgroundContent};
`
const Article = styled.article`
  margin: 3.58rem 0.58rem 0.93rem;
  line-height: 1.4;

  @media screen and (min-width: 576px) {
    column-count: 2;
  }

  @media screen and (min-width: 992px) {
    column-count: 3;
  }

  h1 {
    font-size: ${props => props.theme.fontH1};
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

const Content = ({ children }) => (
  <Wrapper>
    <Article>{children}</Article>
  </Wrapper>
)

export default Content
