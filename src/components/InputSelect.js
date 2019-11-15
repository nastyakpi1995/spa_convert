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

const InputSelect = () => { 
  
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate autoComplete="off">
       <TextField
          id="standard-select-currency"
          label="UAH"
          className={classes.textField}
          value={'₴'}
          disabled
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          
          helperText="Please select your currency"
          margin="normal"
        >'EUR'
        </TextField>
       </form>
    );
}


export default  InputSelect;