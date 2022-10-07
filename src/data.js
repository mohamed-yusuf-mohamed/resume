import {Children, cloneElement} from "react"
import primary from "./config.column.primary"
import secondary from "./config.column.secondary"

const data = ({className, children}) => {
  // const column = {
  //   primary, 
  //   secondary
  // }
  return Children.map(children, child => cloneElement(child, {primary, secondary}))
  return (
    <div className={className}>
      {Children.map(children, child => cloneElement(child, {primary, secondary}))}
    </div>
  )
}
export default data