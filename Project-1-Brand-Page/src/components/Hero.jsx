import heroImage from "../assets/images/shoe_image.png";
import Button from "./Button";
import flipkartImageIcon from '../assets/images/flipkart.png'
import amazonImageIcon from '../assets/images/amazon.png'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <section id="hero">
      <div className="heroContent">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="btnContainer">
            <Button buttonName={'Shop Now'}/>
            <Button buttonName={'Category'}/>
        </div>
        <div className="productAvailableWrapper">
            <p>Also Available On</p>
            <div className="productAvailableIcons">
                <img src={flipkartImageIcon} alt="Flipkart Icon" />
                <img src={amazonImageIcon} alt="Amazon Icon" />
            </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src={heroImage} alt="Hero Image" />
      </div>
    </section>
  );
};

export default Hero;
