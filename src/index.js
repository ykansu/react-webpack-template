import FormContainer from "./js/components/container/FormContainer.jsx";
import React from "react"
import ReactDOM from 'react-dom';


ReactDOM.render(<FormContainer />, document.getElementById("root")) ;

//master reverted
if (module.hot) {
    // Whenever a new version of App.js is available
    module.hot.accept('./js/components/container/FormContainer.jsx', function () {
      // Require the new version and render it instead
      ReactDOM.render(<FormContainer />, document.getElementById("root")) ;
    // console.log("test")
    })
  }