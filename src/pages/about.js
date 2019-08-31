import React from "react"
import { Link } from "gatsby"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import VisibilitySensor from "react-visibility-sensor"
import "react-circular-progressbar/dist/styles.css"
import Img from "gatsby-image"
import ProfilePic from "../images/profile-pic.png"
import { SkillOverView, ContactInfo } from "../data"

class About extends React.Component {
  constructor(props) {
    super(props)
    this.senseVisibility = this.senseVisibility.bind(this)
  }
  componentDidMount() {}
  senseVisibility(isVisible) {
    console.log(`Visisble ${isVisible}`)
  }
  render() {
    const { startYear, email, phone, location, nationality } = ContactInfo
    const experience = new Date().getFullYear() - startYear

    return (
      <section className="panel about" id="about">
        <div className="grid ">
          <div className="col-xs-8 col-md-8 col-grid">
            <div className="content">
              <h4 className="panel-title">About Me</h4>
              <p className="panel-intro">{`I'm a Professional Developer with ${experience} years of experience `}</p>
              <p className="panel-content">
                {`A technology enthusiast with ${experience} years of product development expertise. Experienced in building highly interactive and scalable web applications, mobile and full-stack development. End to end product development expertise in building B2C and Enterprise software solutions for Financial, Retail, Social Media Marketing and Enterprise communication sectors with experience in team-building mentoring.`}
              </p>
              <div className="basic-info">
                <ul className="grid">
                  <li className="col-xs-6 col-md-6 info-item">
                    <span className="icon icon-mail" />
                    <span className="label">Email : </span>
                    <a className="text" href={`mailto:${email}`}>
                      {email}
                    </a>
                  </li>
                  <li className="col-xs-6 col-md-6 info-item">
                    <span className="icon icon-phone2" />
                    <span className="label">Phone : </span>
                    <a className="text" href={`tel:${phone}`}>
                      {phone}
                    </a>
                  </li>
                  <li className="col-xs-6 col-md-6 info-item">
                    <span className="icon icon-location" />
                    <span className="label">Location : </span>
                    <a className="text">{location}</a>
                  </li>
                  <li className="col-xs-6 col-md-6 info-item">
                    <span className="icon icon-users" />
                    <span className="label">Nationality : </span>
                    <span className="text">{nationality}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-4 col-md-4 col-grid">
            <div className="profile-pic">
              <img src={ProfilePic} />
            </div>
          </div>
          <div className="basic-skills">
            <ul className="grid">
              {SkillOverView.map(skill => {
                const { value, color, label, experience } = skill
                return (
                  <VisibilitySensor key={label} onChange={this.senseVisibility}>
                    {({ isVisible }) => {
                      const percentage = isVisible ? value : 0
                      return (
                        <li className="col-xs-3 col-md-3 skill-indicator">
                          <div className="level">
                            <CircularProgressbar
                              value={percentage}
                              text={`${value}%`}
                              styles={buildStyles({
                                rotation: 0.5,
                                strokeLinecap: "butt",
                                textSize: "22px",
                                pathTransitionDuration: 0.75,
                                pathColor: color,
                                trailColor: "#d6d6d6",
                                backgroundColor: "#3e98c7",
                              })}
                            />
                          </div>
                          <div className="label">
                            <h5 className="title">{label}</h5>
                            <p className="exp">{`${experience} - Years`}</p>
                          </div>
                        </li>
                      )
                    }}
                  </VisibilitySensor>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default About
