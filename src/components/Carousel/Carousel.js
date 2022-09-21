import classes from "./Carousel.module.css";
import { createRef, useEffect, useState } from "react";
import { ReactComponent as ArrowLeft } from "../../assets/images/icons/chevron-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/images/icons/chevron-right.svg";

const Carousel = (props) => {
  const carouselRef = createRef(null);
  const [position, setPosition] = useState(1);
  const [width, setWidth] = useState(0);
  const [transitionTime, setTransitionTime] = useState(0);

  function handleResize() {
    setTransitionTime(0);
    setWidth(carouselRef.current.clientWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  const handleClickPrevious = () => {
    setTransitionTime(0.8);
    position === 1 ? setPosition(props.pictures.length) : setPosition(position - 1);
  };

  const handleClickNext = () => {
    setTransitionTime(0.8);
    position === props.pictures.length ? setPosition(1) : setPosition(position + 1);
  };

  return (
    <div className={classes.carousel_wrapper} ref={carouselRef}>
      {props.pictures.length > 1 && (
        <ArrowLeft
          className={classes.carousel_arrowLeft}
          onClick={() => handleClickPrevious()}
        />
      )}

      {props.pictures.map((picture, i) => (
        <img
          key={`picture-${i + 1}`}
          src={picture}
          alt="accomodations"
          style={{
            left: `${width * (i - (position - 1))}px`,
            transition: `left ${transitionTime}s ease-in-out`,
          }}
        />
      ))}

      <p className={classes.carousel_counter}>
        {position}/{props.pictures.length}
      </p>

      {props.pictures.length > 1 && (
        <ArrowRight
          className={classes.carousel_arrowRight}
          onClick={() => handleClickNext()}
        />
      )}
    </div>
  );
};

export default Carousel;
