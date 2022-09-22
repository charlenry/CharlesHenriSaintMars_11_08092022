import classes from "./Spinner.module.css";

const Spinner = (props) => {
  return (
    <div className={ classes.spinner_wrapper }>
      <div className={ classes.lds_spinner }>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
