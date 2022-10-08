import {v4 as uuid} from "uuid"

const detail = ({heading, data}) => (
  <section>
    <h2>{heading}</h2>
    {data.map(({heading, data}) => (
      <section key={uuid()}>
        <h2>{heading}</h2>
        <p>{data}</p>
      </section>
    ))}
  </section>
)
export default detail