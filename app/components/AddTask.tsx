'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import Modal from './Modal';
import { FormEventHandler, useState } from 'react';
import { addTask } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue1, setnewTaskValue1] = useState<string>('');
  const [newTaskValue2, setnewTaskValue2] = useState<string>('');

  const handleSubmitTask:FormEventHandler<HTMLFormElement> = async (e) =>{
    e.preventDefault();
    await addTask({
      id: uuidv4(),
      time: newTaskValue1,
      task: newTaskValue2
    })
    setnewTaskValue1("");
    setnewTaskValue2("");
    setModalOpen(false);
    router.refresh();
  }
  return (
    <div>
        <button onClick={()=> setModalOpen(true)} className='btn btn-primary w-full'>Add new task <AiOutlinePlus className='ml-2' size={18}/></button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <form onSubmit={handleSubmitTask}>
            <h3 className='fonr-bold text-large color-white'>Add new task</h3>
            <div className='mdoal-action'>
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
    </div>
  )
}

export default AddTask;