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

  @media screen and (min-width: 576px) {
    padding: 5.095rem 1.245rem 0.93rem;
  }
`
const Article = styled.article`
  line-height: 1.4;
`

const Content = ({ children }) => (
  <Wrapper>
    <Article>{children}</Article>
  </Wrapper>
)

export default Content
