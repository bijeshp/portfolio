import React from "react"
import { Link } from "gatsby"
import Particles from "react-particles-js"
import HeroBackground from "../images/hero-bg.jpg"
import { About } from "../data"

class Hero extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}
  render() {
    const { name, quote, social } = About
    return (
      <section
        className="panel hero"
        id="home"
        style={{ backgroundImage: `url(${HeroBackground})` }}
      >
        <Particles
          className="background"
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        <div className="foreground">
          <div className="intro">
            <strong>Hello !</strong>
            <h1 className="cd-headline clip">
              <span className="ft_600">I am </span>
              <span className="ft_600">{name}</span>
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
