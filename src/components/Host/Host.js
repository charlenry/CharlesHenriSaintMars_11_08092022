import classes from './Host.module.css';

const Host = (props) => {
  const [firstName, lastName] = props.name.split(" ");
  return (
    <div className={classes.host_wrapper}>
      <p>
        {firstName}
        <br />
        {lastName}
      </p>

      <div className={classes.host_photo}>
        <img src={props.picture} alt={`${props.name}`} />
      </div>
    </div>
  );
}

export default Host;