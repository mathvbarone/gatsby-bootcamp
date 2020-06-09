import React from "react"
import Footer from "./footer"
import Header from "./header"
import layoutStyles from "../components/layout.module.scss"
import "../styles/index.scss"

const Layout = ({ children }) => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <Header />
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout
