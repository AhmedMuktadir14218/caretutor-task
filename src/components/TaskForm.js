'use-client'
import React, { useState } from 'react';
import TaskList from './TaskList';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2); // Number of items to display per page

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

    const handleTask = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            const newList = [...list];
            newList[editIndex] = { title, description };
            setList(newList);
            setEditIndex(null);
        } else {
            const newdata = { title, description };
            setList([...list, newdata]);
        }
        setTitle('');
        setDescription('');
    }

    const removeItem = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    const editItem = (index) => {
        const taskToEdit = list[index + (currentPage - 1) * itemsPerPage];
        setTitle(taskToEdit.title);
        setDescription(taskToEdit.description);
        setEditIndex(index + (currentPage - 1) * itemsPerPage);
    }
    

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(list.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="max-w-lg mx-auto mt-8">
            <form onSubmit={handleTask} className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">{editIndex !== null ? 'Edit Task' : 'Add Task'}</h2>
                <div className="mb-4">
                    <label htmlFor="titleTask" className="block text-sm font-medium text-gray-300">Title</label>
                    <input 
                        id="titleTask"
                        name='titleTask' 
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)} 
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-700 bg-gray-700 text-white rounded-md focus:ring-blue-500 focus:border-blue-500" 
                        type="text" 
                        placeholder="Enter title" 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="inputDesc" className="block text-sm font-medium text-gray-300">Description</label>
                    <textarea 
                        id="inputDesc"
                        name='inputDesc' 
                        value={description}
                        onChange={(e)=> setDescription(e.target.value)}
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-700 bg-gray-700 text-white rounded-md focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="Enter description" 
                         
                    />
                </div>
                <div className='flex justify-end'>
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        {editIndex !== null ? 'Update' : 'Add'}
                    </button>
                </div>
            
            </form>
            <div className="mt-8">
            <TaskList tasks={list} editItem={editItem} removeItem={removeItem} currentItems={currentItems}/>

            </div>
            {/* Pagination */}
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
