class App extends React.Component {
  constructor(props) {
    super(props);
    this.DEBUG = true;
    this.state = {
      todos: props.todos,
      inputValue: ''
    }
  }

  handleOnChange(e) {
    const newValue = e.target.value;
    this.DEBUG && console.log('typed!', newValue);
    this.setState({
      inputValue: newValue
    });
  }

  handleOnKeyDown(e) {
    if (e.key === 'Enter') {
      const todoNote = this.state.inputValue;
      this.addTodo(todoNote);
    }
  }

  addTodo(todoNote) {
    if (todoNote === '') { return; }
    const newTodo = { note: todoNote, complete: false };
    const todos = this.state.todos;
    todos.unshift(newTodo);
    this.setState({
      todos: todos,
      inputValue: ''
    });
  }

  toggleTodo(index) {
    this.DEBUG && console.log('toggle!', index);
    const todos = this.state.todos;
    const newCompleteValue = todos[index].complete ? false : true;
    todos[index].complete = newCompleteValue;
    this.setState({
      todos: todos
    })
  }

  render() {
    const todos = this.state.todos;

    return (
      <div className='todos'>
        <h2>Todos:</h2>

        <input
          value={this.state.inputValue}
          onChange={this.handleOnChange.bind(this)}
          onKeyDown={this.handleOnKeyDown.bind(this)}
          placeholder='New Todo' />

        <ul>
          {todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                todo={todo}
                toggle={this.toggleTodo.bind(this, index)} />
            );
          })}
        </ul>
      </div>
    );
  }
}
