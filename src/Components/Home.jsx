/* eslint-disable jsx-a11y/alt-text */
/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/home.jpg";
import arrowSvg from "../images/down-arrow.svg"; // Adjust the path as necessary

const Home = ({ name, title, imageAltText }) => {
  const bounceKeyframes = {
    "0%, 20%, 50%, 80%, 100%": {
      transform: "translateY(0)",
    },
    "40%": {
      transform: "translateY(-20px)",
    },
    "60%": {
      transform: "translateY(-10px)",
    },
  };

  const bounceAnimation = {
    animationName: bounceKeyframes,
    animationDuration: "2s",
    animationIterationCount: "infinite",
  };

  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt={imageAltText} />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem"}}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>

      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img
          src={arrowSvg}
          alt="Scroll down"
          style={{
            display: "inline-block",
            cursor: "pointer",
            height: "3rem",
            width: "3rem",
            ...bounceAnimation,
          }}
        />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
};

export default Home;
