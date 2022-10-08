const skill = ({heading, data}) => (
  <section>
    <h2>{heading}</h2>
    {data.map(({name, rating}) => (
      <section>
        <p>{name}</p>
        <p>{rating}</p>
      </section>
    ))}
  </section>
)
export default skill