import Component from "../component/component.js";
import TodoList from '../todo-list/todo-list.js';
import AppHeader from '../app-header/app-header.js'

export default class App extends Component {
    constructor(anchor, props) {
        super(anchor, props);
    }
    render(){
        return(
            `<div>${AppHeader()}</div>
            <div>${new TodoList(this.anchor, {
                listItems: [{
                    text: "My some text"
                  },
                  {
                    text: "My other text"
                  },
                  {
                    text: "My new text"
                  },
                ]
              })}
              </div>`
        );
    }
}