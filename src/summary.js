import Bullet from "./bullet.index"
const summary = ({heading, data, className}) => (
  <section className={className}>
    <div className="heading">
      <Bullet type="heading"/>
      <h1>{heading}</h1>
    </div>
    <div className="list">
      <Bullet type="list" />
      <p>{data}</p>             
    </div>
  </section>
)
export default summary