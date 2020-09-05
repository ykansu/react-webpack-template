import FormContainer from "./js/components/container/FormContainer.jsx";
import React from "react"
import ReactDOM from 'react-dom';
import {InputModel} from "./js/components/model/InputModel";


let inputModel = new InputModel();
ReactDOM.render(<FormContainer model={inputModel}/>, document.getElementById("root")) ;


if (module.hot) {
    // Whenever a new version of App.js is available
    module.hot.accept('./js/components/container/FormContainer.jsx', function () {
      // Require the new version and render it instead
      ReactDOM.render(<FormContainer model={inputModel} />, document.getElementById("root")) ;
    // console.log("test")
    })
  }