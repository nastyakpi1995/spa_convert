import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import * as selectors from '../redux/store';

const useStyles = makeStyles(theme => ({
 button: {
   margin: theme.spacing(1),
 },
}));

const ButtonComponent = ({ handleClickChange }) => {
  const classes = useStyles();
  const handleClick = () => {
    handleClickChange()
  } 
  return (  
    <div className="box-button"> 
      <Button
      variant="contained"
      color="primary"
      className={classes.button}
      endIcon={<Icon>send</Icon>}
      onClick={handleClick}
    >
      Exchange
    </Button>
    </div>
  
 );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  handleClickChange: () => dispatch(selectors.handleClick()),
  // setCcy: ccy => dispatch(selectors.setValueConvert(ccy)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonComponent);
