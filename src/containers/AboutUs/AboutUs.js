import classes from './AboutUs.module.css';
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import moutain from "../../assets/images/photos/moutain.png";
import moutainMobile from "../../assets/images/photos/moutain_m.png";
import Accordion from "../../components/Accordion/Accordion";
import { useEffect, useState } from "react";
import useBrowserWidth from "../../containers/hooks/useBrowserWidth";

const AboutUs = (props) => {
  const dimension = useBrowserWidth();
  const [accordionFontSizeTitle, setAccordionFontSizeTitle] = useState();
  const [accordionFontSizeContent, setAccordionFontSizeContent] = useState();
  const bannerHeight = 223;
  const [image, setImage] = useState();
  const [objectPosition, setObjectPosition] = useState();

  useEffect(() => {

    if (dimension >= 476) {
      setAccordionFontSizeTitle(24);
      setAccordionFontSizeContent(24);
    } else if (dimension < 476) {
      setAccordionFontSizeTitle(13);
      setAccordionFontSizeContent(12);
    }

    if (dimension >= 992) {
      setImage(moutain);
    } else  if (dimension < 992) {
      setImage(moutainMobile)
    }

    if (dimension <= 390) {
      setObjectPosition("0px 0px");
    }

  }, [dimension]);

  return (
    <>
      <Header />
      <Banner 
        image={image} 
        text={""} height={bannerHeight} 
        objectPosition={objectPosition} 
      />
      <div className={classes.accordion_wrapper}>
        <Accordion 
          title="Fiabilité" 
          minHeight=""
          accordionFontSizeTitle={accordionFontSizeTitle} 
          accordionFontSizeContent={accordionFontSizeContent}
        >
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les  informations sont régulièrement vérifiées  par nos équipes.</p>
        </Accordion>
        <Accordion 
          title="Respect" 
          minHeight=""
          accordionFontSizeTitle={accordionFontSizeTitle} 
          accordionFontSizeContent={accordionFontSizeContent}
        >
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Accordion>
        <Accordion 
          title="Service" 
          minHeight=""
          accordionFontSizeTitle={accordionFontSizeTitle} 
          accordionFontSizeContent={accordionFontSizeContent}
        >
          <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
        </Accordion>
        <Accordion 
          title="Sécurité" 
          minHeight=""
          accordionFontSizeTitle={accordionFontSizeTitle} 
          accordionFontSizeContent={accordionFontSizeContent}
        >
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Accordion>
      </div>
      
      <Footer />
    </>
    
  );
}

export default AboutUs;