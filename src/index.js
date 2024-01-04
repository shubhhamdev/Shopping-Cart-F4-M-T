import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import MyCartContextProvider from './components/context/MyCartContextProvider';

ReactDOM.render(
    <MyCartContextProvider>
        <App/>
    </MyCartContextProvider>,document.getElementById("root"));
