import { v4 as uuid } from 'uuid'

const education = ({ heading, data }) => (
  <section key={uuid()}>
    <h2>{heading}</h2>
    {data.map(({course}) => (
      <div key={uuid()}>
        <p>{course}</p>
      </div>
    ))}
  </section>
)
export default education
