import React from "react"
// import { Link } from "gatsby"
import VisibilitySensor from "react-visibility-sensor"
import Image from "../components/image"

import { TechSkills } from "../data"

class Skills extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}

  render() {
    console.log(`skills ${TechSkills.length}`)
    const windowGlobal = typeof window !== "undefined" && window
    const { innerHeight, innerWidth } = windowGlobal
    const numTiles = TechSkills.length
    const rowLen = Math.sqrt(numTiles)
    const tileWidth = innerWidth / rowLen
    const tileHeight = innerHeight / rowLen
    console.log(`innerHeight ${innerHeight} :: innerWidth ${innerWidth}`)

    return (
      <section className="panel skills" id="skills">
        <ul className="skill-list">
          {TechSkills.map(skill => {
            const { name, icon } = skill
            const randomBgColor =
              "#" + (((1 << 45) * Math.random()) | 0).toString(16)
            return (
              <li
                className="skill-list__item"
                style={{
                  backgroundColor: randomBgColor,
                  height: tileHeight,
                  width: tileWidth,
                }}
              >
                <div
                  className="mask"
                  style={{
                    backgroundImage: `url(${icon})`,
                  }}
                />
                <div className="content">
                  <p className="label">{name}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

export default Skills
