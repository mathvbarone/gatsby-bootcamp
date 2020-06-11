import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

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
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  const {
    contentfulBlogPost: {
      title,
      published,
      body: { json },
    },
  } = data

  return (
    <Layout>
      <Head title={title} />
      <Link to={"/blog"}>Return</Link>
      <h1>{title}</h1>
      <p>{published}</p>
      <div style={{ paddingTop: "40px" }}>
        {documentToReactComponents(json, options)}
      </div>
    </Layout>
  )
}

export default Blog
