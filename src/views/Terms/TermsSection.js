/*eslint-disable*/
import React from 'react';

import ReactPlayer from 'react-player';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Accordion from '../Components/Accordion/Accordion.js';
import Box from '@material-ui/core/Box';
// @material-ui/icons
import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';
// import Button from '../../components/CustomButtons/Button.js';

//script tag
import ScriptTag from 'react-script-tag';

// core components
import downloadStyle from '../../assets/jss/material-kit-react/views/componentsSections/downloadStyle.js';

class EventSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} style={{ marginTop: '120px' }}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h3>HealthyBee Service Use</h3>
              <h4>
                <ol>
                  <li>
                    User is hereby allowed to use the HealthyBee Service subject
                    to acceptance of the terms and conditions and the Privacy
                    Policy on the HealthyBee App and/or Website (“Terms”).
                    HealthyBee retains the right to change the Terms from time
                    to time and such modified Terms shall be immediately
                    applicable. Every time you use the HealthyBee Service, shall
                    constitute your acceptance of changes made to Terms. For
                    detailed terms, please refer our website www.HealthyBee.fit.
                  </li>
                </ol>
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <h3>Our Pricing and GST impact</h3>
              <h4>
                <ol>
                  <li>
                    GST has been slashed from 18% to 5%, however none of the
                    Input Tax Credits are available to us any longer, thereby
                    increasing our effective input costs. Given the increased
                    costs, benefit of tax reduction is being offset at this
                    time. We are working overtime to reduce the input tax
                    impact, so that we can eventually pass on the benefit to
                    you.
                  </li>
                </ol>
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <h3>Ordering</h3>
              <h4>
                <ol>
                  <li>
                    You agree that, any contract for the Food and Food Delivery
                    ordered through use of HealthyBee App and/or Website is
                    between you and the Participating Restaurant; any contract
                    for the supply of HealthyBee Service from the HealthyBee App
                    and/or Website is between you and HealthyBee. You agree to
                    take reasonable care when providing HealthyBee with your
                    details and warrant that these details are accurate and
                    complete at the time of ordering food. You also warrant that
                    the credit or debit card details that you provide are of
                    your own credit or debit card.
                  </li>
                  <br />
                  <li>
                    Participating Restaurant ensures quality standards and is
                    solely responsible and liable for all and any issues and
                    cases pertaining to the quality of the food or order for eg.
                    veg/non-veg labelling etc but not limited to this, to the
                    User directly. Further User understands that HealthyBee is
                    merely providing its platform to participating restaurants
                    to sell their food and HealthyBee or its employees cannot be
                    held liable in any manner for the issues.
                  </li>
                  <br />

                  <li>
                    User understands that some type of Food may be suitable for
                    Users within certain age ranges only. It is your sole
                    responsibility to check whether the Food you are ordering is
                    suitable for the intended recipient.
                  </li>
                </ol>
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <h3>Prices And Payment</h3>
              <h4>
                <ol>
                  <li>
                    All prices listed on the HealthyBee App and/or Website for
                    Food is correct at the time of publication and is as
                    received from the Participating Restaurant. While HealthyBee
                    takes great care to keep them up to date, the final price
                    charged to you by the Participating Restaurant may change at
                    the time of delivery ,based on the latest menu and prices of
                    the Participating Restaurant. HealthyBee reserves the right
                    to alter the menu of Food available for sale on the
                    HealthyBee App and/or Website and to delete and remove from
                    listing Participating Restaurants and their menu of Food and
                    Food Delivery options, if any.
                  </li>
                  <br />
                  <li>
                    All prices listed on the HealthyBee App and/or Website for
                    Food Delivery by the Participating Restaurant or its
                    delivery partner listed on the HealthyBee App and/or Website
                    reflect the price charged by the Participating Restaurant or
                    its delivery partner at the time of listing. In the event
                    where Participating Restaurant or its delivery partner
                    informs HealthyBee immediately after placing the order by
                    the User, about the change in price for Food Delivery,
                    HealthyBee will try to make every possible effort to inform
                    the User about the price difference and the User can choose
                    to opt-out of the order at that time.
                  </li>
                  <br />

                  <li>
                    User agrees that in case of change in price, HealthyBee or
                    its employees will not be liable to him in any manner.
                  </li>
                  <br />

                  <li>
                    The total price for Food and Food Delivery including all
                    other charges, taxes, costs, if any, will be displayed on
                    the HealthyBee App and/or Website when you place your order.
                    Full payment must be made for all the particulars mentioned
                    in the order.
                  </li>
                  <br />

                  <li>
                    If you choose online payment, you shall ensure that online
                    payment mode is secured, your debit/credit card details will
                    be encrypted to prevent the possibility of someone being
                    able to read them as they are sent over the internet. Your
                    credit card company may also conduct necessary security
                    checks to confirm about your identification before making
                    any such payment.
                  </li>
                </ol>
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <h3>Delivery</h3>
              <h4>
                <ol>
                  <li>
                    Delivery period quoted at the time of ordering are
                    approximate only and may vary. Food will be delivered to the
                    address as intimated by you while ordering.
                  </li>
                  <br />
                  <li>
                    HealthyBee and the Participating Restaurant will make every
                    effort to deliver within the time stated; however,
                    HealthyBee will not be liable for any loss caused to you by
                    late delivery. If the Food is not delivered within the
                    estimated delivery time quoted, User shall contact the
                    Participating Restaurant first. You may also contact
                    HealthyBee by email and HealthyBee will try to ensure that
                    you receive your order as quickly as reasonably possible.
                  </li>
                  <br />

                  <li>
                    In case of a late delivery, the delivery charge will neither
                    be voided nor refunded by HealthyBee.
                  </li>
                  <br />

                  <li>
                    If you fail to accept delivery of Food at the time they are
                    ready for delivery or HealthyBee is unable to deliver at the
                    nominated time due to your failure to provide appropriate
                    instructions or authorizations, then the Food shall be
                    deemed to have been delivered to you and all risk and
                    responsibility in relation to such Food shall pass to you.
                    Any storage, insurance and other costs which HealthyBee
                    incur as a result of the inability to deliver shall be your
                    responsibility and you shall indemnify HealthyBee in full
                    for such cost.
                  </li>
                  <br />

                  <li>
                    You must ensure that at the time of delivery of Food
                    adequate arrangements, including access where necessary, are
                    in place for the safe delivery of the Food. HealthyBee
                    cannot be held liable for any damage, cost or expense
                    incurred to such Food as a result of a failure to provide
                    adequate access or arrangements for delivery.
                  </li>
                </ol>
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <h3>Personal Information And Privacy</h3>
              <h4>
                <ol>
                  <li>
                    User understands and acknowledges that by choosing
                    HealthyBee you have allowed HealthyBee to use your personal
                    information.
                  </li>
                  <br />
                  <li>
                    User understands, acknowledges and agrees that although
                    HealthyBee provides appropriate firewalls and protections,
                    the HealthyBee Service is not hack proof. Data pilferage due
                    to unauthorized hacking, virus attacks, technical issues is
                    possible.
                  </li>
                  <br />

                  <li>
                    In case HealthyBee is required to disclose your personal
                    information in order to assist the Government Authority or
                    in adherence to the Court Order or to protect the interest
                    of the HealthyBee Service and/or any particular user(s),
                    HealthyBee will disclose it without obtaining prior
                    permission from you. You authorize us to disclose your
                    personal information.
                  </li>
                </ol>
              </h4>
            </GridItem>

            <GridItem xs={12} sm={12} md={8}>
              <h3>Ownership Of Intellectual Property</h3>
              <h4>
                <ol>
                  <li>
                    All intellectual property rights of the HealthyBee,
                    including but not limited to copyright, logos, names,
                    trademarks, service marks, design, text, sound recordings,
                    images, links, concepts and themes are exclusively owned by
                    the HealthyBee. Any reproduction, transmission, publication,
                    performance, broadcast, alteration, license, hyperlink,
                    creation of derivative works or other use in whole or in
                    part in any manner is strictly prohibited.
                  </li>
                  <br />
                </ol>
              </h4>
            </GridItem>
          </GridContainer>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default withStyles(downloadStyle)(EventSection);
