import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoPage } from "./pages/todo";
import { TodoProvider } from './context/TodoContext.jsx'; // TodoProviderをインポート
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider> {/* TodoProviderでTodoPageをラップ */}
      <TodoPage />
    </TodoProvider>
  </React.StrictMode>,
)
