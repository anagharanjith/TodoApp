
import { Route, Routes } from 'react-router-dom'
import './App.css'
import TodoApp from './components/TodoApp'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<TodoApp/>}/>
    </Routes>
    </>
  )
}

export default App
