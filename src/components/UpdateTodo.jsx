/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { updateTodo } from '../features/todos/todosSlice';

const UpdateTodo = ({ data, onchangeUpdate }) => {

  const [input, setInput] = useState(data);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleUpdate = (e) => {

    e.preventDefault();

    // dispatch({ type: "updateTodo", payload: { id: input.id, title: input.title } })
    dispatch(updateTodo(input))
    onchangeUpdate(false);
  }
  return (
    <div>
      <form onSubmit={handleUpdate} className="space-x-3 mt-12">
        <input
          type="text"
          name='title'
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input.title}
          onChange={handleInputChange}
        />
        <button
          type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Update
        </button>
      </form>

    </div>
  )
}

export default UpdateTodo
