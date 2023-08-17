import Banner from "../components/banner/banner";
import MainButton from "../components/button";
import Text from "../components/text/text";

const Home = () => {
  return (
    <>
      <div className="home">
        <Banner />
        <MainButton link={"/about"} text={"home"} backgroundColor={"red"} />
        <Text />
      </div>
    </>
  );
};
export default Home;
