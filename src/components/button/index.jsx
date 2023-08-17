import { Link } from "react-router-dom";

const MainButton = ({ backgroundColor, text, link }) => {
  return (
    <>
      <Link to={link}>
        <button
          style={{
            backgroundColor: backgroundColor,
          }}
          className="contact-link"
        >
          {text}
        </button>
      </Link>
    </>
  );
};
export default MainButton;
