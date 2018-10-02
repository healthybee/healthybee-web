import React from 'react';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
// import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from '../../../components/Grid/GridContainer.js';
import GridItem from '../../../components/Grid/GridItem.js';
import Card from '../../../components/Card/Card.js';
import carouselStyle from '../../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.js';
import image4 from '../../../assets/img/food/Green_Tea.jpg';
import image5 from '../../../assets/img/food/Hot_Coffee.jpg';
import image6 from '../../../assets/img/food/Masala_Tea.jpg';
import image7 from '../../../assets/img/food/Ginger_Tea.jpg';
import image8 from '../../../assets/img/food/Fruit_Museli.jpg';
import image9 from '../../../assets/img/food/Chicken_SW.jpg';
import image10 from '../../../assets/img/food/Veg_mayo_SW.jpg';
import image11 from '../../../assets/img/food/Jerk_Chicken_Salad.jpg';
import image12 from '../../../assets/img/food/Egg_Brown_Rice.jpg';
import image13 from '../../../assets/img/food/Fruit_Custard.jpg';

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
          <GridContainer justify="center">
            <div className={classes.title}>
              <h2>Our Popular Healthy Cuisine</h2>
            </div>
            <GridItem xs={12} sm={12} md={8}>
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
                      <h3>Green Tea</h3>
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
                      <h3>Hot Coffee</h3>
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
                      <h3>Masala Tea</h3>
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
                      <h3>Ginger Tea</h3>
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
                      <h3>Fruit Museli Breakfast</h3>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image9}
                      alt="Third slide"
                      className="slick-image"
                      height="350px"
                    />
                    <div className="slick-caption">
                      <h3>Chicken Sandwich</h3>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image10}
                      alt="Third slide"
                      className="slick-image"
                      height="350px"
                    />
                    <div className="slick-caption">
                      <h3>Veg Mayo Sandwich</h3>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image11}
                      alt="Third slide"
                      className="slick-image"
                      height="350px"
                    />
                    <div className="slick-caption">
                      <h3>Jerk Chicken Salad</h3>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image12}
                      alt="Third slide"
                      className="slick-image"
                      height="350px"
                    />
                    <div className="slick-caption">
                      <h3>Egg Brown Rice Salad</h3>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image13}
                      alt="Third slide"
                      className="slick-image"
                      height="350px"
                    />
                    <div className="slick-caption">
                      <h3>Fruit Custard</h3>
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
