import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
