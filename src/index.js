import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// 무엇을? 
// render App from ./App, 
// 어디에? 
// index.html의 document.getElementById('root);


// React 는 하나의 Component 만 Html에 Render 할 수 있다.
// 따라서, Component 안에 또 다른 Component * n 
// 의 형식으로 Render 하자.

// ex) Potato.js 라는 Component를 추가할때. 
// App.js > Potato.js 방식으로 import 해 추가해야 한다.

// 즉, Render 되는 Component는 App.js 하나.