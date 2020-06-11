import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Head from "../components/head"

const NotFound = () => (
  <Layout>
    <Head title="404" />
    <h1>Not Found!</h1>
    <p>
      <Link to="/" />
      Head home
    </p>
  </Layout>
)

export default NotFound
