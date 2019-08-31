import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer>
    <div className="copy-rights">
      © {new Date().getFullYear()}
      <a href="mailto:bijeshp009@gmail.com"> Bijesh Purushan</a>
    </div>
  </footer>
)

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
