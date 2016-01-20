const Todo = (props) => {
  const todo = props.todo;
  const todoClasses = todo.complete ? 'todo done' : 'todo';

  return (
    <li
      className={todoClasses}
      onClick={props.toggle}>{todo.note}</li>
  )
}
