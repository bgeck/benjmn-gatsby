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
  margin: 3.53rem 0.58rem 0.93rem;
  line-height: 1.4;
`

const Content = ({ children }) => (
  <Wrapper>
    <Article>{children}</Article>
  </Wrapper>
)

export default Content
