import React from "react"
import { Link } from "gatsby"
import Particles from "particlesjs"
import { About } from "../data"

class Hero extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    Particles.init({
      selector: ".background",
      maxParticles: 150,
      connectParticles: true,
      opacity: 0.3,
      //   color: "#48F2E3",
      color: "#FFFFFF",
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 2000,
          },
        },
        color: {
          value: ["#FFFFFF", "#FFFFFF"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#DDDDDD",
            opacity: 0.3,
          },
          polygon: {
            nb_sides: 3,
            opacity: 0.3,
          },
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 0.1,
            opacity_min: 0.1,
            sync: true,
          },
        },
        size: {
          value: 7,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            size_min: 0.5,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#FFFFFF",
          opacity: 0.3,
          width: 2,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "in",
          bounce: true,
          attract: {
            enable: true,
            rotateX: 1200,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
            opacity: 0.3,
          },
          onclick: {
            enable: true,
            mode: "remove",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 300,
            line_linked: {
              opacity: 0.1,
            },
          },
          bubble: {
            distance: 100,
            size: 10,
            duration: 2,
            opacity: 0.4,
            speed: 1,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            particles_nb: 5,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    })
  }
  render() {
    const { title, quote, social } = About
    return (
      <section className="panel hero" id="home">
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
