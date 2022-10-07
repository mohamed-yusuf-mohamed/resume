import components from "./components"

import { Fragment } from 'react'

const column = ({ primary }) => {
  return Object.keys(primary).map((section) => {
    const Component = components[section]
    return <Component {...primary[section]} />
  })
  // return (
  //   <Fragment>
  //     <Title>
  //       <Name />
  //       <Profession />
  //     </Title>

  //     <Section>
  //       <Heading type="summary" />
  //       <Summary {...summary} />
  //     </Section>

  //     <Section>
  //       <Heading type="history" />
  //       <Jobs {...jobs} />
  //       {/* {jobs.map((props) => (
  //         <Job {...props} />
  //       ))} */}
  //     </Section>

  //     <Section>
  //       <Heading type="other" />
  //       {other.map((props) => (
  //         <Other {...props} />
  //       ))}
  //     </Section>

  //     <Section>
  //       <Heading type="education" />
  //       {education.map((props) => (
  //         <Education {...props} />
  //       ))}
  //     </Section>

  //     <Section>
  //       <Heading type="interests" />
  //       {interests.map((props) => (
  //         <Interest {...props} />
  //       ))}
  //     </Section>
  //   </Fragment>
  // )
}
export default column
