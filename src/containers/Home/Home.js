import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Galllery";
import useFetch from "../hooks/useFetch";
import shoreline from "../../assets/images/photos/shoreline.png";
import Footer from "../../components/Footer/Footer";

const Home = (props) => {
  const { data, hasError, errorType, isLoading } = useFetch("/logements.json");

  return (
    <>
      <Header />
      <Banner image={shoreline} text={"Chez vous, partout et ailleurs"} />
      <Gallery
        data={data}
        hasError={hasError}
        errorType={errorType}
        isLoading={isLoading}
      />
      <Footer />
    </>
  );
};

export default Home;
