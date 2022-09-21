import classes from './Tag.module.css';

const Tag = (props) => {
  return (
    <div className={classes.tag}>{props.title}</div>
  );
}

export default Tag;