import './Accordion.css';
import { useState } from "react";
import { ReactComponent as ArrowUp } from "../../assets/images/icons/chevron-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/images/icons/chevron-down.svg";

const Accordion = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="accordion_wrapper"
    >
      <div className="accordion_title" onClick={() => setOpen(!open)}>
        { props.title }
        { open ? <ArrowUp /> : <ArrowDown /> }
      </div>
      <div
        className={open ? "accordion_content appear" : "accordion_content disappear"}
        style={{ display: `${open ? "block" : "none"}` }}
      >
        { props.children }
      </div>
    </div>
  );
}

export default Accordion;