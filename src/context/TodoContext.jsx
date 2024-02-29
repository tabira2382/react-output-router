import React, { createContext, useContext, useState } from 'react';

// 1. Contextの作成
const TodoContext = createContext();

// 2. Providerコンポーネントの定義
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([{ id: 1, title: "Todo1" }, { id: 2, title: "Todo2" }]);
  const [maxId, setMaxId] = useState(2);

  const addTodo = (title) => {
    const newId = maxId + 1;
    const newTodo = { id: newId, title: title };
    setTodos([...todos, newTodo]);
    setMaxId(newId);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const searchTodos = (query) => {
    return todos.filter(todo => todo.title.toLowerCase().startsWith(query.toLowerCase()));
  };

  // Contextのvalueとして提供する状態と関数
  const value = {
    todos,
    addTodo,
    deleteTodo,
    searchTodos
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};

// 3. useContextを使用してContextの値を利用するカスタムフック
export const useTodos = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};
