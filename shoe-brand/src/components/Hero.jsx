const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroContent">
        <div className="heroText">
          <p className="heroTitle">YOUR FEET DESERVE THE BEST</p>
          <span className="heroDescription">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </span>

          <div className="heroButtons">
            <button className="shopNowBtn">Shop Now</button>
            <button className="categoryBtn">Category</button>
          </div>
          <div>
            <p className="availabilityText">Also Available on</p>
            <img src="/images/amazon.png" alt="" />
            <img className="logoImage" src="/images/flipkart.png" alt="" />
          </div>
        </div>
        <div>
          <img src="/images/hero-image.png" alt="Hero" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
