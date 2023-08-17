import "./about2.scss";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="title-top">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="big-field container">
          <form action="">
            <div className="big-santa">
              <div className="santa">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="santa">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Emial"
                  required
                />
              </div>
              <div className="santa">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Provide context"
                  required
                />
              </div>
              <div className="santa">
                <label htmlFor="sel-s">Subject</label>
                <input
                  type="text"
                  id="sel-s"
                  placeholder="Select Subject"
                  required
                />
              </div>
            </div>
            <div className="area-t">
              <label htmlFor="textarea">Message</label>
              <textarea
                name=""
                id="textarea"
                cols="30"
                rows="10"
                placeholder="Write your  question here"
              ></textarea>
            </div>
            <div className="contact-btn">
              <input type="submit" value={"Send Messege"} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default About;
