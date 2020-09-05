import {action, observable} from "mobx";

export class InputModel {
    @observable value = "default value";

    @action handleValue = (e) => {
        this.value = e.target.value;
    }
}