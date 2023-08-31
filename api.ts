import { ITask } from "./types/tasks";

const baseUrls = "http://localhost:3001";

export const getAllTask = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrls}/task`,{cache: 'no-store'});
    const todos = await res.json();
    return todos;
}

export const addTask = async (task: ITask): Promise<ITask> =>{
    const res = await fetch(`${baseUrls}/task`,{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(task)
    });
    const newTask = await res.json();
    return newTask;
}

export const editTask = async (task: ITask): Promise<ITask[]> => {
    const res = await fetch(`${baseUrls}/task/${task.id}`,{
        method: 'PUT',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(task)
    });
    const updated = await res.json();
    return updated;
}

export const deleteTask = async (id: string): Promise<void> => {
    await fetch(`${baseUrls}/task/${id}`,{
        method: 'Delete',
    });
}

