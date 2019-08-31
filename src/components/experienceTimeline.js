import PropTypes from "prop-types"
import React from "react"

const ExperienceTimeLine = props => {
  return (
    <ul className="timeline">
      {props.items.map(event => {
        const {
          logo,
          companyName,
          websiteURL,
          designation,
          tenure,
          overview,
          logoColor,
          contributions,
        } = event
        return (
          <li className="event">
            <div className="thumb">
              <a className="icon" href={websiteURL} target="_new">
                <i className={logo} style={{ color: logoColor }} />
              </a>
              <p className="time">{tenure}</p>
            </div>
            <div className="content">
              <div className="content__heading">
                <h4 className="title">{designation}</h4>
                <h5 className="subtitle">
                  <a href={websiteURL} target="_new">
                    {companyName}
                  </a>
                </h5>

                <p className="content__overview">{overview}</p>
                <div className="content__details">
                  <p className="title">
                    <b>Contributions</b>
                  </p>
                  <ul className="items-list">
                    {contributions.map(contribution => {
                      return (
                        <li className="items-list__item">
                          <i className="icon icon-checkmark"></i>
                          <span className="text">{contribution}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ExperienceTimeLine
