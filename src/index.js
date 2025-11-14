import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {StyledAppContainer} from './styledComponents';
import WebHeader from './webheader';
import reportWebVitals from './reportWebVitals';
<script src="https://kit.fontawesome.com/3539c55f85.js" crossorigin="anonymous"></script>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <StyledAppContainer>
      <WebHeader />
    </StyledAppContainer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
