import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import{BrowserRouter, Route} from 'react-router-dom'
import ContactComponent from './components/contact.js';
import AboutComponent from './components/about.js';

ReactDOM.render(
    <BrowserRouter>
    <div>
        <Route exact path="/" component={App}></Route>
        <Route  path="/contact" component={ContactComponent}></Route>
        <Route  path="/about" component={AboutComponent}></Route>
    </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
