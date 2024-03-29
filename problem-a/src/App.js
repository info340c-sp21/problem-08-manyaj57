import React from 'react'; //import React library

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */


export function App(prop) {
  let senatorList = prop.senators;
  return (
    <div className="container">
      <h1>
        US Senators (Oct 2020)
      </h1>
      <SenatorTable senators={senatorList}/>
    </div>
  );
}

export function SenatorTable(prop) {
  let senatorList = prop.senators;
  let colNames = ['Name', 'State', 'Phone', 'Twitter'];
  let rows = senatorList.map((sen) => <SenatorRow key={sen.id} senator={sen}/>)

  return (
    <table className="table table-bordered">
      <TableHeader columnNames={colNames}/>
      <tbody>{rows}</tbody>
    </table>
  );
}

export function TableHeader(prop) {
  let col = prop.columnNames;
  let cells = col.map((item) => <th key={item}>{item}</th>)
  
  return (
    <thead>
      <tr>
        {cells}
      </tr>
    </thead>
  );
}

export function SenatorRow(prop) {
  let senator = prop.senator;
  return (
    <tr>
      <td>{senator.name}</td>
      <td>{senator.party[0]} - {senator.state}</td>
      <td><a href={'tel:' + senator.phone}>{senator.phone}</a></td>
      <td><a href={'https://twitter.com/' + senator.twitter}>{'@' + senator.twitter}</a></td>
    </tr>
  )
}