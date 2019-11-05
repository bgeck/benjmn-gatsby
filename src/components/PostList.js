import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

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
          id
          excerpt
          frontmatter {
            date
            title
            path
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      {data.allMdx.nodes.map(({ frontmatter, excerpt, id }) => (
        <div key={id}>
          <Link to={frontmatter.path}>
            <h2>{frontmatter.title}</h2>
            <div>{excerpt}</div>
            <span>{frontmatter.date}</span>
          </Link>
        </div>
      ))}
    </Wrapper>
  )
}

export default PostList
