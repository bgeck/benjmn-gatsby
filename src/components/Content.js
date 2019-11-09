import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: auto;
  align-items: center;
  grid-gap: ${props => props.theme.padding};
  padding: 4.595rem 1.245rem 0.93rem;
  color: ${props => props.theme.colorDark};
  background: ${props => props.theme.backgroundContent};
  width: 100%;

  &.posts {
    padding: 4.595rem 0 0.93rem;
  }

  &.alignStart {
    align-items: start;
  }
`
const Article = styled.article`
  line-height: 1.4;
  column-rule: 1px solid;
  column-rule-color: ${props => props.theme.colorMid};
  column-gap: 3.5rem;

  @media screen and (min-width: 576px) {
    column-count: ${props => props.theme.columns - 2 || 1};
  }

  @media screen and (min-width: 768px) {
    column-count: ${props => props.theme.columns - 1 || 1};
  }

  @media screen and (min-width: 992px) {
    column-count: ${props => props.theme.columns};
  }
`

const Content = ({ children, posts, alignStart }) => (
  <Wrapper className={`${posts && "posts"} ${alignStart && "alignStart"}`}>
    <Article>{children}</Article>
  </Wrapper>
)

export default Content
