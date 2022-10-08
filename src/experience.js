import {v4 as uuid} from "uuid"
import { Fragment } from 'react'
const experience = ({ className, data }) => {
  return (
    <article className={className}>
      {data.map(({ heading, company, bullets }) => (
        <section key={uuid()}>
          <h3>{heading}</h3>
          <p>{company}</p>
          <ul>
          {bullets.map((bullet) => (
            <li key={uuid()}>{bullet}</li>
          ))}
          </ul>
        </section>
      ))}
    </article>
  )
}
export default experience
