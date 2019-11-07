import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 1.245rem;
  grid-row-gap: 0.665rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: 0 1.245rem;
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
            <h6>{frontmatter.date}</h6>
            <div>{excerpt}</div>
          </Link>
        </div>
      ))}
    </Wrapper>
  )
}

export default PostList
