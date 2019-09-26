import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/bijesh_icon.png"

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
    const { coloredHeader } = this.props
    return (
      <header
        className={`header ${
          isFloatingHeader || coloredHeader ? "floating" : ""
        }`}
      >
        <div className="logo">
          <img src={Logo} />
        </div>
        <nav className="nav-links">
          <Link to="#home" className="menu-item">
            <i className="icon icon-home" />
            <span className="text">Home</span>
          </Link>
          <Link to="#about" className="menu-item">
            <i className="icon  icon-official" />
            <span className="text">About</span>
          </Link>
          <Link to="#work" className="menu-item">
            <i className="icon icon-briefcase" />
            <span className="text">Experience</span>
          </Link>
          <Link to="#skills">
            <i className="icon icon-wrench" />
            <span className="text">Skills</span>
          </Link>
          <Link to="#education" className="menu-item">
            <i className="icon icon-graduate" />
            <span className="text">Education</span>
          </Link>
          <Link to="/blogs" className="menu-item">
            <i className="icon icon-book" />
            <span className="text">Blogs</span>
          </Link>
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
