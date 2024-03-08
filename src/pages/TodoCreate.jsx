// src/pages/TodoCreate.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodos } from '../context/TodoContext';
import { InputForm } from '../components/atoms/InputForm/index.jsx';

const TodoCreate = () => {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodos();
  const navigate = useNavigate();

  const handleAddTodo = () => {
    addTodo(title);
    navigate('/'); // 新規登録後に一覧ページに戻る
  };

  return (
    <div>
      <h2>Create New Todo</h2>
      <InputForm
        inputValue={title}
        placeholder="Enter todo title"
        handleChangeValue={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoCreate;
