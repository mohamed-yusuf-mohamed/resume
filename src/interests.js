import {Fragment} from "react"
const interest = ({ heading, data }) => (
  <Fragment>
    <h2>{heading}</h2>
    {data.map((interest) => (
      <p>{interest}</p>
    ))}
  </Fragment>
)
export default interest
