import AnimateOnChange from 'react-animate-on-change'
import React from "react";

const Msg = (props) =>
  <AnimateOnChange
    baseClassName={props.message}
    animationClassName="message--flash"
    animate={props.diff != 0}>
      <strong>{props.message}</strong>
  </AnimateOnChange>

  export default Msg