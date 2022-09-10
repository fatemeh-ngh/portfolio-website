import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.module.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import Mouse from './components/Mouse';
// import CustomCursorManager from './components/CustomCursor/context/manager'
// const loadingMarkup = () => {
//   <div className="py-4 text-center">
//     <h2>Loading...</h2>
//   </div>
// }

ReactDOM.render(
  // <Suspense fallback={loadingMarkup}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  // </Suspense>,
  ,document.getElementById('root')
);