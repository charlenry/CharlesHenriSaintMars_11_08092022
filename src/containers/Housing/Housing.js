import classes from "./Housing.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/Spinner/Spinner";
import Carousel from "../../components/Carousel/Carousel";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import Accordion from "../../components/Accordion/Accordion";
import useBrowserWidth from "../../containers/hooks/useBrowserWidth";

const Housing = (props) => {
  const { housingId } = useParams();
  const { data, hasError, errorType, isLoading } = useFetch("/logements.json");
  const [housingChoice, setHousingChoice] = useState();
  const dimension = useBrowserWidth();
  const [height, setHeight] = useState();
  const [accordionFontSizeTitle, setAccordionFontSizeTitle] = useState();
  const [accordionFontSizeContent, setAccordionFontSizeContent] = useState();

  useEffect(() => {
    if (dimension >= 1440) {
      setHeight(249);
    } else if (dimension < 1440) {
      setHeight(144);
    }

    if (dimension >= 476) {
      setAccordionFontSizeTitle(18);
      setAccordionFontSizeContent(18);
    } else if (dimension < 476) {
      setAccordionFontSizeTitle(13);
      setAccordionFontSizeContent(12);
    }
  }, [dimension]);

  useEffect(() => {
    if (data.length > 0) {
      const selectedHousing = data.find((housing) => housing.id === housingId);
      setHousingChoice(selectedHousing);
    }
  }, [housingId, data, hasError, errorType]);

  if (hasError) {
    console.log(errorType);
    return (
      <>
        <Header />
        <div className={classes.error}>Une erreur est survenue...</div>
      </>
    );
  }

  if (housingChoice === undefined && !hasError)
    return (
      <>
        <Header />
        <div className={classes.error}>
          Ce logement n'est pas dans la base de données.
        </div>
      </>
    );

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        housingChoice && (
          <>
            <div className={classes.housing_wrapper}>
              <Header />
              <Carousel pictures={housingChoice.pictures} />
            </div>

            <div className={classes.info_wrapper}>
              <div className={classes.titleLocTags_wrapper}>
                <h1>{housingChoice.title}</h1>
                <h2>{housingChoice.location}</h2>
                <div className={classes.tags}>
                  {housingChoice.tags.map((tag, i) => (
                    <Tag key={`housing_tag-${i}`} title={tag} />
                  ))}
                </div>
              </div>
              <div className={classes.profile_wrapper}>
                <Host
                  name={housingChoice.host.name}
                  picture={housingChoice.host.picture}
                />
                <Rating rate={parseInt(housingChoice.rating)} />
              </div>
            </div>

            <div className={classes.description_wrapper}>
              <Accordion 
                title="Description" minHeight={height} 
                accordionFontSizeTitle={accordionFontSizeTitle} 
                accordionFontSizeContent={accordionFontSizeContent}
              >
                {housingChoice.description}
              </Accordion>
              <Accordion 
                title="Équipements" minHeight={height}
                accordionFontSizeTitle={accordionFontSizeTitle} 
                accordionFontSizeContent={accordionFontSizeContent}
              >
                <ul className={classes.equipments}>
                  {housingChoice.equipments.map((equipment, i) => (
                    <li key={i}>{equipment}</li>
                  ))}
                </ul>
              </Accordion>
            </div>
            <Footer />
          </>
        )
      )}
    </>
  );
};

export default Housing;
