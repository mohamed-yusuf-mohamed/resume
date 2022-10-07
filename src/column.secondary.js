import Skill from "./skills"
import Detail from "./details"
import Heading from "./heading"
import Section from "./section"
import components from "./components"
import { Fragment } from 'react'

const column = ({ secondary }) => {
  return Object.keys(secondary).map((section) => {
    const Component = components[section]
    return <Component {...secondary[section]} />
  })
  // return (
  //   <Fragment>
  //     <Section>
  //       <Heading type="details" />
  //       {details.map((props) => (
  //         <Detail {...props} />
  //       ))}
  //     </Section>

  //     <Section>
  //       <Heading type="skills" />
  //       {skills.map((props) => (
  //         <Skill {...props} />
  //       ))}
  //     </Section>
  //   </Fragment>
  // )
}
export default column
