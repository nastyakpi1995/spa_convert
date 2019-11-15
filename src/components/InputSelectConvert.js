import React, {useState} from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
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
  menu: {
    width: 200,
  },
}));

const InputSelect = ({ 
  valueMoney,
  setCcy,
}) => { 
  const classes = useStyles();
  const [currency, setCurrency] = useState('EUR');

  const handleChange = event => {
    setCurrency(event.target.value);
    setCcy(event.target.value);
  };
  return (
    <form className={classes.container} noValidate autoComplete="off">
       <TextField
          id="standard-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={currency}
          onChange={handleChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {valueMoney ? valueMoney.map(option => (
            <MenuItem 
              key={option.ccy} 
              value={option.buy}
            >
              {option.ccy}
            </MenuItem>
          )) : ''}
        </TextField>
       </form>
    );
}


const mapStateToProps = state => ({
  valueMoney: state.valueMoney,
  
});

const mapDispatchToProps = dispatch => ({
  setCcy: ccy => dispatch(selectors.setValueConvert(ccy)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputSelect);