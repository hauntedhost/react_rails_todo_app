const Todos = (props) => {

  const handleOnChange = (e) => {
    const newValue = e.target.value;
    __debug('typed!', newValue);
    props.updateInputValue(newValue);
  }

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      props.addTodo();
    }
  }

  return (
    <div className='todos'>
      <h2>Todos:</h2>

      <input
        value={props.inputValue}
        onChange={handleOnChange.bind(this)}
        onKeyDown={handleOnKeyDown.bind(this)}
        placeholder='New Todo' />

      <ul>
        {props.todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              todo={todo}
              toggle={props.toggleTodo.bind(this, index)} />
          );
        })}
      </ul>
    </div>
  )
}
