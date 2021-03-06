import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
const IndexPage = ({data}) => {
  const {allMdx:{nodes:posts} } = data
  return (
    <Layout>
      <Hero showPerson />
      <Posts posts={posts} title="recently published"/>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC },limit: 3) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMM Do, YYYY")
          slug
          readTime
          image {
            childImageSharp {
              fluid(sizes: "") {
...GatsbyImageSharpFluid
              }
            }
            id
          }
        }
      }
    }
  }
`