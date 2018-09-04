import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MemeQuiz from './MemeQuiz';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MemeQuiz />, document.getElementById('root'));
registerServiceWorker();
