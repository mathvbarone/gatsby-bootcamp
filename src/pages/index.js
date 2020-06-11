import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <h1>Hello!</h1>
    <p style={{ paddingTop: "20px" }}>
      Need a developer? <Link to="/about">About</Link>
    </p>
  </Layout>
)

export default IndexPage
