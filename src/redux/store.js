import { createStore} from 'redux';


const SET_DATAMONEY = 'SET_DATAMONEY';
const SET_VALUEMONEY = 'SET_VALUEMONEY';
const SET_VALUEMONEY_CONVERT = 'SET_VALUEMONEY_CONVERT';
const SET_VALUE = 'SET_VALUE';
const SET_VALUE_CONVERT = 'SET_VALUECONVERT';
const SET_BUTTON = 'SET_BUTTON';

export const setDataMoney = valueMoney => ({ type: SET_DATAMONEY, valueMoney });
export const setValueMoney = ccy => ({ type: SET_VALUEMONEY, ccy });
export const setValueMoneyConvert = ccy => ({ type: SET_VALUEMONEY_CONVERT, ccy });
export const setValue = value => ({ type: SET_VALUE, value });
export const setValueConvert = value => ({ type: SET_VALUE_CONVERT, value });
export const handleClick = () => ({ type: SET_BUTTON });


const initialState = {
  valueMoney: [],
  ccy: 0,
  ccyConvert: 0,
  value: 0,
  valueConvert: 'EUR',
  result: 0,
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case SET_DATAMONEY:
      return {
        ...state,
        valueMoney: action.valueMoney,
      }
    case SET_VALUEMONEY:
      return {
        ...state,
        ccy: +action.ccy,
      }
    case SET_VALUE:
      return {
        ...state,
        value: +action.value,
      }
    case SET_VALUE_CONVERT:
      return {
        ...state,
        valueConvert: +action.value,
      }
    case SET_BUTTON:
      const number = state.valueConvert * state.value;
      return {
        ...state,
        result: number.toFixed(2),
      }

   default:
    return state;
  }
 }

const store = createStore(
  rootReducer, 
  initialState,
  );

// export const getVisibleValueMoney = (state) => console.log(state.valueMoney);


export default store;