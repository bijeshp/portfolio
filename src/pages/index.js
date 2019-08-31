import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "./hero"
import About from "./about"
import Experience from "./experience"
import Education from "./education"
import Skills from "./skills"

import "./style.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Education />
  </Layout>
)

export default IndexPage
