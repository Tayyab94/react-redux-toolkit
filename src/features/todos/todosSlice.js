import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const generatedId = nanoid()

            const todo = {
                id: generatedId,
                text: action.payload
            }

            state.todos = [...state.todos, todo]
            // state.todos.push(todo)

        },
        removeTodo: (state, action) => {
            // state.todos = state.todos.filter((todo) => todo.id != action.payload);
            var data = state.todos.filter((todo) => todo.id != action.payload);
            state.todos = data;
        },
        updateTodo: (state, action) => {
            const { id, title } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = title;
            }
        }
    }
})


export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer