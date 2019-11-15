import React from 'react';
import { connect } from 'react-redux';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import { Route, NavLink, Switch } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Personal from './Personal';
import ConvertMoney from './ConvertMoney';

const Convert = () => { 
  return (
    <div className="App">
      <header className="App-header">
      <Paper>
        <MenuList>
          <MenuItem>
          <NavLink
            to="/person"
            className="page"
            activeClassName="ClassActive"
          >
            <ListItemIcon>
            <PermIdentityIcon />
            </ListItemIcon>
            <Typography variant="inherit">person page</Typography>
            </NavLink>
          </MenuItem>
          <MenuItem>
          <NavLink
              to="/convertion"
              className="page "
              activeClassName="ClassActive"
            >
                 <ListItemIcon>
                 <PersonPinCircleIcon />
              </ListItemIcon>
              convertion
            </NavLink>
          </MenuItem>
        </MenuList>
      </Paper>
        <Switch>
            <Route
                path="/convertion"
                render={() => (
                  <Personal />
                )}
              />
          <Route
            path="/person"
            render={() => (
              <ConvertMoney />
            )}
          />
        </Switch>
        </header>
      </div>
    );
}

const mapStateToProps = state => ({
  valueMoney: state.valueMoney,
  all: state,
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Convert);