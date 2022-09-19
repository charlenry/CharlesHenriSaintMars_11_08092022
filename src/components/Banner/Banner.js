import classes from "./Banner.module.css";

const Banner = (props) => {
  return (
    <div className={classes.banner}>
      <img className={classes.banner_img} src={props.image} alt="Bannière" />
      <p>{props.text}</p>
    </div>
  );
};

export default Banner;
