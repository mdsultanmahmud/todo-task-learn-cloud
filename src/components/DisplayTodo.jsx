import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Modal from './Modal';
const DisplayTodo = ({ prop }) => {
    const { dataHandle, setDataHandle, todos, setTodos } = prop
    const [editTodo, setEditTodo] = useState({})
    let [url, setUrl] = useState(`http://localhost:5000/getAllTask`)
    const handleSelected = (e) => {
        const today = new Date()
        const week = Math.ceil((today.getDate() - today.getDay()) / 7)
        const sortedValue = e.target.value
        if (sortedValue == 'day') {
            setUrl(`http://localhost:5000/getAllTask?presentDate=${today.toLocaleDateString()}`)
        } else if (sortedValue == 'week') {
            setUrl(`http://localhost:5000/getAllTask?year=${today.getFullYear()}&month=${today.getMonth()}&week=${week}`)
        } else if (sortedValue == 'year') {
            setUrl(`http://localhost:5000/getAllTask?year=${today.getFullYear()}`)
        }
        else if (sortedValue == 'all') {
            setUrl(`http://localhost:5000/getAllTask`)
        }
        setDataHandle(!dataHandle)
    }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTodos(data)
            })
    }, [dataHandle])

    // handle delete data 
    const handleDelete = id => {
        fetch(`http://localhost:5000/deleteTask/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setDataHandle(!dataHandle)
                    toast.success('Data Deleted Successfully!!')
                }
            })
    }

    const handleDone = (id) => {
        fetch(`http://localhost:5000/donetask/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setDataHandle(!dataHandle)
                    toast.success('This item is done.')
                }
            })
    }
    return (
        <div className='mx-20 mb-36 px-20 w-full'>
            <div className='absolute top-20 right-5'>
                <select onChange={handleSelected} className="select select-accent w-full max-w-xs">
                    <option disabled selected>Data Sort By</option>
                    <option value={'day'}>Day</option>
                    <option value={'week'}>Week</option>
                    <option value={'year'}>Year</option>
                    <option value={'all'}>All</option>
                </select>
            </div>
            <div className='w-full p-4'>
                {
                    todos.length > 0 ? <>
                        <div className='text-center'>
                            <h1 className='px-8 py-4 font-bold bg-[#6495ED] text-white mr-4'>All Task</h1>
                        </div>
                        <div className="overflow-x-auto w-full mt-12">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Icon</th>
                                        <th>Name</th>
                                        <th>Added Date</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        todos.length > 0 &&
                                        todos.map((todo) => (

                                            <tr className='hover' key={todo._id}>
                                                <th>
                                                    <label>
                                                        <input disabled={todo?.isDone} type="checkbox" className="checkbox" onClick={() => handleDone(todo._id)} checked={todo.isDone} />
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
                                                <td><label onClick={()=> setEditTodo(todo)} htmlFor="my-modal-3" className='inline-block p-2 bg-base-300 hover:bg-[#FF5733] hover:text-white font-bold cursor-pointer'><AiFillEdit size={22} /></label></td>
                                                <td>
                                                    
                                                    <button onClick={() => handleDelete(todo._id)} className='p-2 bg-base-300 hover:bg-[#FF5733] hover:text-white font-bold'><RiDeleteBin6Line size={22} /></button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                                {
                                    editTodo && 
                                    <Modal prop = {{editTodo,dataHandle, setDataHandle}}></Modal>
                                }
                            </table>
                        </div>
                    </> :
                        <h3 className='text-center font-semibold mt-5 text-xl'>There are no task added.</h3>


                }
            </div>

        </div>
    );
};

export default DisplayTodo;