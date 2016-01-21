const Words = (props) => {

  return (
    <div className="words">
      <h3>Words:</h3>

      <ul>
        {props.words.map((word, index) => {
          return (
            <li key={index}>
              <button
                onClick={props.updateButtonName.bind(this, word.name)}>
                {word.name}
              </button>
              &nbsp; {word.word}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
