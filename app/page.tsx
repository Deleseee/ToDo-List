import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import { getAllTask } from '@/api';

export default async function Home() {
  const tasks = await getAllTask();
  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='font-bold text-2xl text-white'>ToDo List</h1>
        <AddTask/>
      </div>
      <TaskList tasks={tasks}/>
    </main>
  )
}
