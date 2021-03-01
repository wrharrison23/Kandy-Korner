import React from "react"
import "./Location.css"
export const Location = ({ location }) => (
  <section className="location">
    <address className="location__address">
      <strong>Location: </strong> {location.address}
    </address>
    <p className="location__footage">Square Footage: {location.squareFootage}</p>
    <p className="location__handicap">Handicap Accessible? {parseBoolean(location.handicap)
  }</p>
  </section>
);

const parseBoolean = (bool) => {
  if(bool === true) {
    return `Yes`
  } else {
    return `No`
  }
}