import { useState } from "react";
import "./ToDo.css";

function ToDO() {
  const [Todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodo([...Todo, inputValue.trim()]);
    setInputValue("");
  };

  const handleRemove = (indexToRemove) => {
    setTodo(Todo.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div className="todo">
      <header>
        <h2>Todo List</h2>
      </header>
      <main>
        <form className="todo-input-group" onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Add a new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>

        <div className="todo-list">
          {Todo.length === 0 ? (
            <p className="empty-msg">No tasks yet!</p>
          ) : (
            Todo.map((item, index) => (
              <div key={index} className="todo-item">
                <p>{item}</p>
                <button type="button" onClick={() => handleRemove(index)}>
                  remove
                </button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default ToDO;
