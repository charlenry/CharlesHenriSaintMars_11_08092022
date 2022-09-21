import { useState, useEffect } from 'react';
import useBrowserWidth from "../../containers/hooks/useBrowserWidth";

const Star = ({ color = "#E3E3E3" }) => {
  const dimension = useBrowserWidth();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {

    if (dimension >= 476) {
      setWidth(30);
      setHeight(30);
    } else if (dimension < 476){
      setWidth(15);
      setHeight(15);
    }

}, [dimension]);



  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
        fill={color}
      />
    </svg>
  );
}

export default Star;