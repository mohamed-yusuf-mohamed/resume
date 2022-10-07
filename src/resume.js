import Column from "./column"
const resume = ({className, primary, secondary}) => {
  return (
    <article className={className}>
      <Column.Primary primary={primary}/>
      <Column.Secondary secondary={secondary}/>
    </article>
  )
}
export default resume