import classes from './Rating.module.css';
import Star from "../../components/Star/Star";

const getStarsColor = (total, rate) => {
  let number = rate;
  let colors = [];
  for (let i = 0; i < total; i++) {
    number > 0 ? colors.push("#FF6060") : colors.push("#E3E3E3");
    number--;
  }
  return colors;
}

const Rating = (props) => {
  const starColors = getStarsColor(5, props.rate);

  return (
    <div className={classes.rating_wrapper}>
      {starColors.map((color, i) => (
        <Star key={`star-${i}`} color={color} />
      ))}
    </div>
  );
}

export default Rating;