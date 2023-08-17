import People from "../../assets/images/people.jpg";
import "./banner.scss";
const Banner = () => {
  return (
    <>
      <div className="banner container">
        <h1>A UX Case Study on Creating a Studious Environment for Students</h1>
        <p>Andrew Jonson Posted on 27th January 2021</p>
        <img src={People} alt="Error" />
      </div>
    </>
  );
};
export default Banner;
