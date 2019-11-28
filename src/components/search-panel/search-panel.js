import Component from "../component/component.js";

export default class SeachPanel extends Component {
    constructor(anchor) {
        super(anchor);
        this.onPropertyChange();
    }
    render(){
        return `<input placeholder="search">Todo List</input>`;
    }
}