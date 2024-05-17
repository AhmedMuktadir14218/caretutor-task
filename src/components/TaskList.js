// 'use-client'

// import React from 'react';

// const TaskList = ({ currentItems, editItem, removeItem }) => {
//     return (
//         <div className="mt-8">
//         <table className="min-w-full divide-y divide-gray-700">
//             {/* Table header */}
//             <thead className="bg-gray-800">
//                 <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Title</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
//                 </tr>
//             </thead>
//             {/* Table body */}
//             <tbody className="bg-gray-900 divide-y divide-gray-700">
//                 {currentItems.map((element, index) => (
//                     <tr key={index}>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">{element.title}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{element.description}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                             <button onClick={() => editItem(index)} className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
//                             <button onClick={() => removeItem(index)} className="text-red-600 hover:text-red-900">Delete</button>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>
//     );
// };

// export default TaskList;

// src/components/TaskList.js
'use client';
import React from 'react';

const TaskList = ({ tasks, editItem, removeItem }) => {
  return (
    <div className="mt-8">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {tasks.map((task, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">{task.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={() => editItem(index)} className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                <button onClick={() => removeItem(index)} className="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
