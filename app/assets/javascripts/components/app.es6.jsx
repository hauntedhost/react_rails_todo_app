class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: props.todos,
      words: props.words,
    }
  }

  updateInputValue(newValue) {
    this.setState({
      inputValue: newValue
    });
  }

  addTodo() {
    const todoNote = this.state.inputValue;
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
    __debug('toggle!', index);
    const todos = this.state.todos;
    const newCompleteValue = todos[index].complete ? false : true;
    todos[index].complete = newCompleteValue;
    this.setState({
      todos: todos
    })
  }

  updateButtonName(buttonName) {
    __debug('actionForButton', buttonName);
    const url = `/word/${buttonName}`;
    $.get(url, (response) => {
      __debug('response', response);

      const words = this.state.words;
      const newWords = words.reduce((result, word) => {
        word.word = (word.name === response.name) ? response.word : word.word;
        result.push(word);
        return result;
      }, []);

      this.setState({
        words: newWords
      })
    });
  }

  render() {
    return (
      <div>
        <Todos
          todos={this.state.todos}
          inputValue={this.state.inputValue}
          updateInputValue={this.updateInputValue.bind(this)}
          addTodo={this.addTodo.bind(this)}
          toggleTodo={this.toggleTodo.bind(this)} />

        <Words
          words={this.state.words}
          updateButtonName={this.updateButtonName.bind(this)} />
      </div>
    );
  }
}
