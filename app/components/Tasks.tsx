'use client';

import { ITask } from '@/types/tasks'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { FormEventHandler, useState } from 'react'
import Modal from './Modal'
import { useRouter } from 'next/navigation';
import { deleteTask, editTask } from '@/api';

interface TaskProps{
    task: ITask
}

const Tasks: React.FC<TaskProps> = ({task}) => {


  const router = useRouter();
  const [opneModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [opneModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [newTaskValue1,setnewTaskValue1] = useState<string>(task.time)
  const [newTaskValue2,setnewTaskValue2] = useState<string>(task.task)

  const handleEditTask:FormEventHandler<HTMLFormElement> = async (e) =>{
    e.preventDefault();
    await editTask({
      id: task.id,
      time: newTaskValue1,
      task: newTaskValue2
    })
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id:string) => {
    await deleteTask(id);
    setOpenModalDelete(false);
    router.refresh();
  }

  return (
    <tr key={task.id}>
        <td>{task.time}</td>
        <td>{task.task}</td>
        <td className='flex gap-5'>
          <BiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer"/>
          <Modal modalOpen={opneModalEdit} setModalOpen={setOpenModalEdit}>
            <form onSubmit={handleEditTask}>
              <h3 className='fonr-bold text-large color-white'>Edit the task</h3>
              <div>
                <br />
                <p>Time</p>
                <input value={newTaskValue1} onChange={e=>setnewTaskValue1(e.target.value)} type="text" placeholder="" className="input input-bordered w-full max-w-xs" />
                <br /><br />
                <p>Task</p>
                <input value={newTaskValue2} onChange={e=>setnewTaskValue2(e.target.value)} type="text" placeholder="" className="input input-bordered w-full max-w-xs" />
                <br /><br />
                <button type='submit' className="btn">Submit</button>
              </div>
            </form>
          </Modal>
          <MdDelete onClick={() => setOpenModalDelete(true)} cursor="pointer" className='text-red-600'/>
          <Modal modalOpen={opneModalDelete} setModalOpen={setOpenModalDelete}>
            <h3 className='fonr-bold text-large color-white'>Are you sure you want to delete the task?</h3>
            <br /><br />
            <div>
              <button onClick={() => handleDeleteTask(task.id)} className="btn">Submit</button>
            </div>
          </Modal>
        </td>
        
    </tr>
  )
}

export default Tasks