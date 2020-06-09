import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM, Do, YYYY")
    }
  }
`

const Blog = ({ data }) => {
  const {
    contentfulBlogPost: { title, published },
  } = data

  return (
    <Layout>
      <Link to={"/blog"}>Return</Link>
      <h1>{title}</h1>
      <p>{published}</p>
    </Layout>
  )
}

export default Blog
