import {v4 as uuid} from "uuid"
import { Fragment } from 'react'
const experience = ({ data }) => {
  return (
    <article>
      {data.map(({ title, company, bullets }) => (
        <section key={uuid()}>
          <h2>{title}</h2>
          <p>{company}</p>
          {bullets.map((bullet) => (
            <li key={uuid()}>{bullet}</li>
          ))}
        </section>
      ))}
    </article>
  )
}
export default experience
