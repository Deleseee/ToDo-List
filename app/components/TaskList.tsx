import { ITask } from '@/types/tasks';
import React from 'react'
import Tasks from './Tasks';

interface TaskListProps{
  tasks: ITask[];
}

const TaskList: React.FC<TaskListProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto color-white font-bold text-2xl">
      <table className="table text-center">
        <thead>
          <tr>
            <th>Time</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(tasks => (<Tasks key={tasks.id} task={tasks}/>))}
        </tbody>
      </table>
    </div>
  )
}

export default TaskList