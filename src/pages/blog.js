import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  const {
    allMarkdownRemark: { edges },
  } = data

  return (
    <Layout>
      <h1>Blog</h1>
      <ul className={blogStyles.posts}>
        {edges.map(post => {
          const {
            node: {
              id,
              fields: { slug },
              frontmatter: { title, date },
            },
          } = post

          return (
            <li className={blogStyles.post} key={id}>
              <Link to={slug}>
                <h2>{title}</h2>
                <p>{date}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogPage
