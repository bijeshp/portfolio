import React from "react"
import { Link } from "gatsby"
// import Particles from "particlesjs"
import HeroBackground from '../images/hero-bg.jpg'
import { About } from "../data"

class Hero extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    const { title, quote, social } = About
    return (
      <section className="panel hero" id="home" style={{backgroundImage:`url(${HeroBackground})`}}>
        <canvas className="background"></canvas>
        <div className="foreground">
          <div className="intro">
            <strong>Hello !</strong>
            <h1 className="cd-headline clip">
              <span className="ft_600">{title}</span>
            </h1>
            <blockquote>{quote}</blockquote>
            <ul className="banner_social_link">
              {social.map(item => (
                <li>
                  <a
                    target="_new"
                    href={item.link}
                    className={`"social-link ${item.icon}`}
                  ></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
