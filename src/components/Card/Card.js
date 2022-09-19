import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.cover} alt={`Logement dont le titre est ${props.title}`} />
      <p>{props.title}</p>
    </div>
  );
}

export default Card;