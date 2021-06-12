import React from 'react';
import ReactDOM from 'react-dom';

//render the App component here!

import { App } from './App';
import senatorList from './senators.json';

ReactDOM.render(<App senators={senatorList} />, document.getElementById('root'));