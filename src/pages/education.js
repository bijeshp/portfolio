import React from "react"
import { Timeline, Event } from "react-timeline-scribble"
import VisibilitySensor from "react-visibility-sensor"

import { EducationDetails } from "../data"

class Education extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}

  render() {
    return (
      <section className="panel education" id="education">
        <h4 className="panel-title">Education</h4>
        {EducationDetails.map(experience => {
          const {
            school,
            websiteURL,
            logo,
            logoColor,
            degree,
            tenure,
            details,
          } = experience
          return (
            <Timeline className="education-timeline">
              <Event interval={tenure}>
                <div className="content">
                  <div className="title" style={{ backgroundColor: logoColor }}>
                    <p className="degree">{degree}</p>
                    <a className="school" href={websiteURL} target="_new">
                      {school}
                    </a>
                  </div>
                  <i className={`icon ${logo}`} style={{ color: logoColor }} />
                </div>
              </Event>
            </Timeline>
          )
        })}
      </section>
    )
  }
}

export default Education
