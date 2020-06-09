import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  } = data

  return (
    <Layout>
      <Link to={"/blog"}>Return</Link>
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export default Blog
