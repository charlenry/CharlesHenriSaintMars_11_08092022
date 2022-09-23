import classes from "./Banner.module.css";

const Banner = (props) => {
  return (
    <div 
      className={classes.banner}
      style={{ 
        height: `${props.height}px`
      }}
    >
      <img 
        className={classes.banner_img} 
        style={{ 
          objectPosition: `${props.objectPosition}`
        }}
        src={props.image} alt="Bannière" 
      />
      <p>{props.text}</p>
    </div>
  );
};

export default Banner;
