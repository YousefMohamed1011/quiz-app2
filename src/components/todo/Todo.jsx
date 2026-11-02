import { useState } from "react";
import "./Todo.css";

export function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodoList([...todoList, inputValue.trim()]);
    setInputValue("");
  };

  const handleRemove = (indexToRemove) => {
    setTodoList(todoList.filter((_, i) => i !== indexToRemove));
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
          {todoList.length === 0 ? (
            <p className="empty-msg">No tasks yet!</p>
          ) : (
            todoList.map((item, index) => (
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

export default Todo;

