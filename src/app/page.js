'use client';

import TaskForm from '@/components/TaskForm';
import TaskList from '../components/TaskList';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 p-4 text-white">
      <main className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Task Manager</h1>
        {/* <TaskList /> */}
        <TaskForm></TaskForm>
      </main>
    </div>
  );
}
