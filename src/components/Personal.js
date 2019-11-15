import React from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux';

let obj = {}


const Personal = ({valueMoney}) => {
 const prepeared = valueMoney.map(a => ({
  ...a,
  value: a.ccy, 
}))
prepeared.forEach((element, i) => (
  obj[i] = element.ccy
 ));

  const [state, setState] = React.useState({
    columns: [
     {
      title: 'Value',
      field: 'value',
      lookup: obj,
    },
      { title: 'Sale', field: 'sale' },
      { title: 'Buy', field: 'buy', type: 'numeric' },
  
    ],
    data: valueMoney,
  });
  console.log(valueMoney);
  return (
    <MaterialTable
      title="Languages value"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}

const mapStateToProps = state => ({
 valueMoney: state.valueMoney,
 result: state.result,
 // all: state,
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
