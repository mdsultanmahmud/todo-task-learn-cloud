import React from 'react';
import { BiImageAdd } from 'react-icons/bi'
const AddTodo = () => {
    return (
        <div className='my-20 mx-20 px-20'>
            <h1 className='text-2xl text-[#FF5733] text-center font-bold mb-6'>Add Your Task</h1>
            <form className='text-center'>
                <div className='flex gap-5 items-center justify-center'>
                    <input className='px-4 py-3 outline-none border border-[#FF5733] mr-4 rounded' type="text" placeholder='Enter Your Task Name' />
                    <label htmlFor="file-upload" className='cursor-pointer'>
                        <div className='flex items-center shadow-lg p-3'>
                            <BiImageAdd size={22}/>
                            <span className='font-bold ml-2'>Upload Task Icon</span>
                        </div>
                        <input type="file" id="file-upload" hidden /></label>
                    <br />
                </div>
                <button className='bg-[#FF5733] px-4 py-3 rounded text-white text-xl font-bold w-1/2 mt-2' type='submit'>Add Task</button>
            </form>
        </div>
    );
};

export default AddTodo;