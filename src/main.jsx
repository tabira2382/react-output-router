import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoPage } from "./pages/todo";
import { TodoProvider } from './context/TodoContext.jsx'; // TodoProviderをインポート
import TodoCreatePage from './pages/TodoCreate'; // 新規登録ページ
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/create" element={<TodoCreatePage />} /> {/* 新規登録ページへのルート */}
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
