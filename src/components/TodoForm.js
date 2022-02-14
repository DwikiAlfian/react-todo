import React from "react";

function TodoForm(props) {
  const [input, setInput] = React.useState("");

  const inputRef = React.useRef(null)

  React.useEffect(() => {
      inputRef.current.focus()
  })

  const handleChange = e => {
      setInput(e.target.value)
  }

  const handleSubmit = e => {
      e.preventDefault();

      props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
      })
      setInput("")
      console.log(props)
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input 
        className="todo-input"
        type="text" 
        placeholder="Add a todo" 
        value={input} 
        name="text" 
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default TodoForm;
