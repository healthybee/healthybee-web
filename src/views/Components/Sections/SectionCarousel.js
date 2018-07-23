import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import carouselStyle from "../../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import image4 from "../../../assets/img/food/avocado-cooked.jpg";
import image5 from "../../../assets/img/food/buffet-chicken-cooking.jpg";
import image6 from "../../../assets/img/food/bowl-delicious-diet.jpg";
import image7 from "../../../assets/img/food/banana-bread-bread-breakfast.jpg";
import image8 from "../../../assets/img/food/bread-breakfast-close-up.jpg";


class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
            <h2>Our popular healthy cuisine</h2>
            </GridItem>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image4}
                      alt="Third slide"
                      className="slick-image"
                      height="350px"
                    />
                    <div className="slick-caption">
                      <h3>Peri Peri Grilled Chicken Salad</h3>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image5}
                      alt="Third slide"
                      className="slick-image"
                      height="350px"
                    />
                    <div className="slick-caption">
                      <h3>Jamacian Grilled Chicken Salad</h3>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image6}
                      alt="Third slide"
                      className="slick-image"
                      height="350px"
                    />
                    <div className="slick-caption">
                      <h3>Fresh Fruit Salad</h3>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image7}
                      alt="Third slide"
                      className="slick-image"
                      height="350px"
                    />
                    <div className="slick-caption">
                      <h3>Fruit Museli Breakfast</h3>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image8}
                      alt="Third slide"
                      className="slick-image"
                      height="350px"
                    />
                    <div className="slick-caption">
                      <h3>Boiled Egg Salad</h3>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
