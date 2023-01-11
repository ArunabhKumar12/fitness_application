import React from 'react' ;
import ReactDOM from 'react-dom' ;
import { BrowserRouter } from 'react-router-dom';

import App from './App'; 

const root = ReactDOM.createRoot(document.getElementById('root')) ;

root.render(
<BrowserRouter>
    <App/>
    {/* We will wrap our App inside the Browser Router so that we can easily use those routes  */}
</BrowserRouter>

) ;