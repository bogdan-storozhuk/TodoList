import Component from '../component/component.js'
import TodoListItem from '../todo-list-item/todo-list-item.js'
export default class TodoList extends Component {
    constructor(anchor, props) {
      super(anchor, props);
    }

    installListeners() {
      this.anchor.addEventListener('click', (event) => {
        this.props = {
          listItems: [
            ...this.props.listItems.filter((item, i) => i != event.target.id),
          ]
        }
      })
    }
    
    render() {
      const {listItems}=this.props;
      return `
        <ul>
          ${listItems.map(listItem => {
            return(
              `<li>${TodoListItem(listItem)}</li>`
            );
          }).join('')}
        </ul>
      `;
    }
  }