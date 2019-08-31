import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../images/bijesh_icon.png'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    const windowGlobal = typeof window !== "undefined" && window
    if (windowGlobal.addEventListener) {
      windowGlobal.addEventListener("scroll", this.handleScroll)
    }

    this.state = {
      isFloatingHeader: false,
    }
  }

  handleScroll() {
    const windowGlobal = typeof window !== "undefined" && window
    if (windowGlobal.scrollY > 80) {
      this.setState({ isFloatingHeader: true })
    } else {
      this.setState({ isFloatingHeader: false })
    }
  }

  render() {
    const { isFloatingHeader } = this.state
    return (
      <header className={`header ${isFloatingHeader ? "floating" : ""}`}>
        <div className="logo">
          <img src={Logo} />
        </div>
        <nav className="nav-links">
          <Link to="#home"> Home</Link>
          <Link to="#about"> About</Link>
          <Link to="#work"> Experience</Link>
          <Link to="#skills">Skills</Link>
          <Link to="#education"> Education</Link>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
