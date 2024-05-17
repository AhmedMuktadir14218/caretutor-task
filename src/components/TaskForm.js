'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask, removeTask } from '../redux/tasksSlice';
import TaskList from './TaskList';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4);

    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tasks.slice(indexOfFirstItem, indexOfLastItem);

    const handleTask = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            dispatch(editTask({ index: editIndex, updatedTask: { title, description } }));
            setEditIndex(null);
        } else {
            dispatch(addTask({ title, description }));
        }
        setTitle('');
        setDescription('');
    };

    const editItem = (index) => {
        const taskToEdit = tasks[index + (currentPage - 1) * itemsPerPage];
        setTitle(taskToEdit.title);
        setDescription(taskToEdit.description);
        setEditIndex(index + (currentPage - 1) * itemsPerPage);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(tasks.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="max-w-lg mx-auto mt-8">
            <form onSubmit={handleTask} className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">{editIndex !== null ? 'Edit Task' : 'Add Task'}</h2>
                <div className="mb-4">
                    <label htmlFor="titleTask" className="block text-l font-medium text-gray-300">Title</label>
                    <input
                        id="titleTask"
                        name='titleTask'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white-900 bg-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        placeholder="Enter title"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="inputDesc" className="block text-l font-medium text-gray-300">Description</label>
                    <textarea
                        id="inputDesc"
                        name='inputDesc'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white-900 bg-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter description"
                        required
                    />
                </div>
                <div className='flex justify-end'>
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        {editIndex !== null ? 'Update' : 'Add'}
                    </button>
                </div>
            </form>
            <div className="mt-8">
                <TaskList tasks={currentItems} editItem={editItem} removeItem={(index) => dispatch(removeTask(index + (currentPage - 1) * itemsPerPage))} />
            </div>
            <div className="mt-4 flex justify-center">
                <nav className="inline-flex">
                    {pageNumbers.map(number => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={`px-3 py-1 rounded-md mx-1 ${currentPage === number ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                        >
                            {number}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default TaskForm;
