import classes from './Accordion.module.css';
import { useState } from "react";
import { ReactComponent as ArrowUp } from "../../assets/images/icons/chevron-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/images/icons/chevron-down.svg";

const Accordion = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={ classes.accordion_wrapper }>
      <div 
        className={ classes.accordion_title } onClick={() => setOpen(!open)}
        style={{ 
          fontSize: `${props.accordionFontSizeTitle}px`
        }}
      >
        { props.title }
        { open ? <ArrowUp /> : <ArrowDown /> }
      </div>
      <div
        className={ classes.accordion_content }
        style={{ 
          display: `${open ? "block" : "none"}`, 
          minHeight: `${props.minHeight}px`,
          fontSize: `${props.accordionFontSizeContent}px`
        }}
      >
        { props.children }
      </div>
    </div>
  );
}

export default Accordion;