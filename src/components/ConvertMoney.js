import React from 'react';
import { connect } from 'react-redux';
import InputSelect from './InputSelect';
import InputValue from './InputValue';
import InputSelectConvert from './InputSelectConvert';
import InputValueConvert from './InputValueConvert';
import ButtonComponent from './Button';

const ConvertMoney = ({ 
  valueMoney,
  all,
}) => { 
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h1>Currency Conversion Calculator</h1>
        <div className="container__grid">
          <InputSelect />
          <ButtonComponent />
          <InputSelectConvert />
          <InputValue />
          <InputValueConvert />
        </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ConvertMoney);