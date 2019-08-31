import React from "react"
// import { Link } from "gatsby"
import VisibilitySensor from "react-visibility-sensor"
import ExperienceTimeLine from "../components/experienceTimeline"
import Image from "../components/image"
import ProfilePic from "../images/profile-pic.png"
import { ProfessionalExperience } from "../data"

class Experience extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}

  render() {
    return (
      <section className="panel experience" id="work">
        <h4 className="panel-title">Experience</h4>
        <ExperienceTimeLine items={ProfessionalExperience} />
      </section>
    )
  }
}

export default Experience
