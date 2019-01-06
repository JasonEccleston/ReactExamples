// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

//create a react component
function getButtonText() {
  return 'click on me!';
}

const App = () => {
  const buttonText = { text: 'click me'};
  return (
  <div>
    <label className="label" htmlFor="name">Enter Name: </label>
    <input id="name" type="text"/>
    <button style= {{ backgroundColor: 'blue', color: 'white' }}>{ buttonText.text }</button>
  </div>
  );
};
//take the react component and show on the browser

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
