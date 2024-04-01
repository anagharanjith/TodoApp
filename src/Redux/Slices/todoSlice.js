import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const { text } = action.payload;
            state.push({ id: nanoid(), text, completed: false });
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export const selectTodos = state => state.todos;
export default todoSlice.reducer;
