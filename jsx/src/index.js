// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

//create a react component
const App = () => {
  return <div> Hi Hi! </div>;
};
//take the react component and show on the browser

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
