import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM, Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = ({ data }) => {
  const {
    contentfulBlogPost: {
      title,
      published,
      body: { json },
    },
  } = data

  return (
    <Layout>
      <Link to={"/blog"}>Return</Link>
      <h1>{title}</h1>
      <p>{published}</p>
      <div style={{ paddingTop: "40px" }}>
        {documentToReactComponents(json)}
      </div>
    </Layout>
  )
}

export default Blog
