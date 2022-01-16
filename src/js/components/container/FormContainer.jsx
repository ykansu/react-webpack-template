import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
import {observer} from "mobx-react";

@observer
class FormContainer extends Component {
    render() {
        const { value, handleValue } = this.props.model;
        return (
            <form id="article-form">
                <Input
                    text="Label"
                    label="label"
                    type="text"
                    id="seo_title"
                    value={value}
                    handleChange={handleValue}
                />
            </form>
        );
    }
}

export default FormContainer;