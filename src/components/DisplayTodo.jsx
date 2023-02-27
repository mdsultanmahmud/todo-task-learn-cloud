import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
const DisplayTodo = ({prop}) => {
    const {dataHandle, setDataHandle} = prop
    const [todos, setTodos] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/getAllTask')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [dataHandle])

    // handle delete data 
    const handleDelete = id =>{
        console.log(id)
        fetch(`http://localhost:5000/deleteTask/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                setDataHandle(!dataHandle)
                toast.success('Data Deleted Successfully!!')
            }
        })
    }
    return (
        <div className='mx-20 mb-36 px-20'>
            {
                todos.length > 0 ? <>
                    <div className='text-center'>
                        <button className='px-8 py-4 font-bold bg-[#FF5733] hover:bg-[#6495ED] text-white mr-4'>All Task</button>
                        <button className='px-8 py-4 font-bold bg-[#FF5733] hover:bg-[#6495ED] text-white'>Done Task</button>
                    </div>
                    <div className="overflow-x-auto w-full mt-12">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Icon</th>
                                    <th>Name</th>
                                    <th>Added Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todos.length > 0 &&
                                    todos.map(todo => <tr key={todo._id}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" checked = {todo?.isDone}/>
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={todo.iconURL} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{todo.taskName}</p>
                                        </td>
                                        <td>{todo.presentDate}</td>
                                        <td>
                                            <button className='p-2 bg-base-300 hover:bg-[#FF5733] mr-2 hover:text-white font-bold'><AiFillEdit size={22} /></button>
                                            <button onClick={() => handleDelete(todo._id)} className='p-2 bg-base-300 hover:bg-[#FF5733] hover:text-white font-bold'><RiDeleteBin6Line size={22} /></button>
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </> :
                    <h3 className='text-center font-semibold mt-5 text-xl'>There are no task added.</h3>


            }
        </div>
    );
};

export default DisplayTodo;