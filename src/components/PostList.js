import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.padding};
  padding: ${props => props.theme.padding};
  margin: 0 0.58rem;
  line-height: 1.4;
`

const PostList = () => {
  const data = useStaticQuery(graphql`
    query Posts {
      allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
        nodes {
          excerpt
          timeToRead
          wordCount {
            paragraphs
            sentences
            words
          }
          frontmatter {
            date
            title
            path
            type
          }
          tableOfContents
        }
      }
    }
  `)

  return (
    <Wrapper>
      {data.allMdx.nodes.map(({ frontmatter, excerpt }) => (
        <div key={frontmatter.title}>
          <a href={frontmatter.path}>
            <h1>{frontmatter.title}</h1>
            <div>{excerpt}</div>
            <span>{frontmatter.date}</span>
          </a>
        </div>
      ))}
    </Wrapper>
  )
}

export default PostList
