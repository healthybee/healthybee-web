import React from 'react';
// react plugin that creates slider
// import Nouislider from "react-nouislider";
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
// import Switch from "@material-ui/core/Switch";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// @material-ui/icons
import Check from '@material-ui/icons/Check';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
// core components
import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';
// import Button from "../../components/CustomButtons/Button.js";
// import CustomInput from "../../components/CustomInput/CustomInput.js";
// import CustomLinearProgress from "../../components/CustomLinearProgress/CustomLinearProgress.js";
// import Paginations from "../../components/Pagination/Pagination.js";
// import Badge from "../../components/Badge/Badge.js";

import basicsStyle from '../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';

class SectionBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedEnabled: 'b',
      checkedA: true,
      checkedB: false
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div id="checkRadios">
          <GridContainer>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h4>Gender</h4>
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  ' ' +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={this.state.selectedEnabled === 'a'}
                      onChange={this.handleChangeEnabled}
                      value="a"
                      name="radio button enabled"
                      aria-label="A"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio
                      }}
                    />
                  }
                  classes={{
                    label: classes.label
                  }}
                  label="Male"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  ' ' +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={this.state.selectedEnabled === 'f'}
                      onChange={this.handleChangeEnabled}
                      value="f"
                      name="radio button enabled"
                      aria-label="A"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio
                      }}
                    />
                  }
                  classes={{
                    label: classes.label
                  }}
                  label="Female"
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h4>Meal Choices</h4>
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  ' ' +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => this.handleToggle(21)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{ checked: classes.checked }}
                    />
                  }
                  classes={{ label: classes.label }}
                  label="Vegitarian"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  ' ' +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => this.handleToggle(21)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{ checked: classes.checked }}
                    />
                  }
                  classes={{ label: classes.label }}
                  label="Eggetarian"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  ' ' +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => this.handleToggle(21)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{ checked: classes.checked }}
                    />
                  }
                  classes={{ label: classes.label }}
                  label="Non-vegetarian"
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h4>Toggle Buttons</h4>
              </div>
              <div>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-simple">Age</InputLabel>
                  <Select
                    value={'stateValue'}
                    onChange={this.handleChange}
                    inputProps={{
                      name: 'age',
                      id: 'age-simple'
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(SectionBasics);
