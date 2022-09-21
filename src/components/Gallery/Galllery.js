import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Card from "../Card/Card";
import classes from './Gallery.module.css';

const Gallery = (props) => {
  if (props.hasError) {
    console.log(props.errorType);
    return <div className={classes.error}>Une erreur est survenue...</div>;
  }

  return (
    <div className={classes.gallery_wrapper}>
      {props.isLoading ? (
        <Spinner />
      ) : (
        props.data.map((housing) => (
          <Link key={housing.id} to={`/housing/${housing.id}`}>
            <Card
              key={housing.id}
              cover={housing.cover}
              title={housing.title}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default Gallery;
