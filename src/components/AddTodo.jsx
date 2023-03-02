import React from 'react';
import { toast } from 'react-hot-toast';
import { BiImageAdd } from 'react-icons/bi'
const AddTodo = ({prop}) => {
    const {dataHandle, setDataHandle} = prop
    // add a task 
    const addTask = (event) =>{
        event.preventDefault()
        const today = new Date()
        const week = Math.ceil((today.getDate() - today.getDay()) / 7)
        const month = today.getMonth()
        const day = today.getDate()
        const presentDate = today.toLocaleDateString()
        const form = event.target
        const taskName = form.task_name.value 
        const iconURL = form.icon_url.value 
        const task = {
            taskName,
            iconURL,
            presentDate,
            isDone: false,
            year:`${today.getFullYear()}`,
            week: `${week}`,
            month: `${month}`,
            day: `${day}`
        }
        fetch('http://localhost:5000/addtask', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)

        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setDataHandle(!dataHandle)
                toast.success('Added Your Task Successfully!')
                form.reset()
            }
        })
    }
    return (
        <div className='my-20 mx-20 px-20 w-full mx-auto'>
            <h1 className='text-2xl text-[#FF5733] text-center font-bold mb-6'>Add Your Task</h1>
            <form className='text-center' onSubmit={addTask}>
                <div className='flex flex-col md:flex-row gap-5 items-center justify-center'>
                    <input name='task_name' className='px-4 py-3 outline-none border border-[#FF5733] mr-4 rounded' type="text" placeholder='Enter Your Task Name' required/>
                    <input name='icon_url' className='px-4 py-3 outline-none border border-[#FF5733] mr-4 rounded' type="text" placeholder='Enter Icon URL  ' required/>
                    <br />
                </div>
                <button className='bg-[#FF5733] px-4 py-3 rounded text-white text-xl font-bold mt-2' type='submit'>Add Task</button>
            </form>
        </div>
    );
};

export default AddTodo;