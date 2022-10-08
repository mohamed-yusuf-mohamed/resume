import styled from "styled-components"
import Bullet from "./bullet"
const bullet = styled(Bullet)`


  .bullet {
    background-color: green;
    height: ${({ theme, type }) => theme.bullet.circle.size[type]};
    width: ${({ theme, type }) => theme.bullet.circle.size[type]};
    border-radius: 100%;
  }

  .container {
    background-color: red;
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    position: relative;
  }

  .line {
    background-color: cornflowerblue;
    height: ${({ theme, type }) => theme.bullet.line.size[type]};
    width: 5px;
    position: absolute;
    top: ${({ theme, type }) => theme.bullet.line.position.top[type]};
  }

  .clip-circle {
    clip-path: circle(60px at center);
    /* OLD VALUE example: circle(245px, 140px, 50px); */
    /* Yep, even the new clip-path has deprecated stuff. */
  }
`
export default bullet
