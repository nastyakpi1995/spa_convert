import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as selectors from './redux/store';
import Convert from './components/Convert';
import { getApi } from './API_fromServer';

class App extends React.Component { 
  async componentDidMount() {
    const valueMoney = await getApi()
      this.props.loadDataValue(valueMoney);
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Convert />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  valueMoney: state.valueMoney,
});

const mapDispatchToProps = dispatch => ({
  // enableLoading: () => dispatch(loadingAction.enableLoading()),
  loadDataValue: valueMoney => dispatch(selectors.setDataMoney(valueMoney)),
  // disableLoading: () => dispatch(loadingAction.disableLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
