import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: published, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            published(formatString: "MMMM, Do, YYYY")
          }
        }
      }
    }
  `)

  const {
    allContentfulBlogPost: { edges },
  } = data

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ul className={blogStyles.posts}>
        {edges.map(post => {
          const {
            node: { id, title, slug, published },
          } = post

          return (
            <li className={blogStyles.post} key={id}>
              <Link to={slug}>
                <h2>{title}</h2>
                <p>{published}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogPage
