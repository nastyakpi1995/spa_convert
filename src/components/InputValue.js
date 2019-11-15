import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as selectors from '../redux/store';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const InputValue = ({setValue}) => {
 // const [currencyValue, setCurrencyValue] = useState('EUR');
  const classes = useStyles();
  const handleChange = event => {
   // setCurrencyValue(event.target.value);
   setValue(event.target.value);
 };
  return (
    <form className={classes.container} noValidate autoComplete="off">
       <TextField
          onChange={handleChange}
          id="outlined-search"
          label="Your current UAH"
          type="number"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
    </form>
  )
}

const mapStateToProps = state => ({
 valueMoney: state.valueMoney,
});

const mapDispatchToProps = dispatch => ({
 setValue: value => dispatch(selectors.setValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputValue);