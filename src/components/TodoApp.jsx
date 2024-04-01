import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, selectTodos, toggleTodo } from '../Redux/Slices/todoSlice'

function TodoApp() {
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()
    const [inputText, setInputText] = React.useState('')

    const handleAddTodo = () => {
        if (inputText.trim() !== '') {
            dispatch(addTodo({ text: inputText })) 
            setInputText('')
        }
    }

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id))
    }

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }

    const completedTodos = todos.filter(todo => todo.completed)

    console.log('Todos:', todos) 

    return (
        <>
            <div className='border container mt-5 w-50'>
                <h2>My Todo List</h2>
                <div className='d-flex justify-content-between'>
                    <input type="text" className='form-control w-75' placeholder='Add todo...' value={inputText} onChange={(e) => setInputText(e.target.value)} />
                    <button className='btn btn-primary ms-auto' onClick={handleAddTodo}>Submit</button>
                </div>
                <div className='border p-3 mt-5'>
                    <ul>
                        {todos.map(todo => (
                            <li key={todo.id} className='d-flex align-items-center'>
                                <input
                                    className='border p-3'
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggleTodo(todo.id)}
                                />
                                <span className='text-primary' style={{ marginLeft: '40px' }}>{todo.text}</span>
                                <button className='btn btn-danger ms-auto' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <h4 className='mt-4'>Completed:{completedTodos.length}</h4>
            </div>
        </>
    )
}

export default TodoApp
