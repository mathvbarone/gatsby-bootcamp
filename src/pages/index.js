import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hello!</h1>
    <h2>Blablabla</h2>
    <p>
      Need a developer? <Link to="/about">About</Link>
    </p>
  </Layout>
)

export default IndexPage
