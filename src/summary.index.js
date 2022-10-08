import styled from "styled-components"
import Summary from "./summary"
const summary = styled(Summary)`
display: flex;
flex-direction: column;

& .heading {
  display: flex;
  flex-direction: row;
}
& .list {
  display: flex;
  flex-direction: row;
}
`
export default summary