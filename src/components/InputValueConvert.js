import React from 'react';
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

const InputValue = ({ valueMoney }) => {
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate autoComplete="off">
       <TextField
          disabled
          id="standard-disabled"
          label="Result"
          type="number"
          className={classes.textField}
          margin="normal"
          value={valueMoney}
        />
    </form>
  )
}

const mapStateToProps = state => ({
  valueMoney: state.result,

});

const mapDispatchToProps = dispatch => ({
 setValue: valueConvert => dispatch(selectors.setValueConvert(valueConvert)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputValue);