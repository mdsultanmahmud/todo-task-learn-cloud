import React from 'react';

const Modal = ({ editTodo }) => {
    console.log(editTodo.taskName)
    const editTask = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-2xl text-[#FF5733] text-center font-bold mb-6'>Edit Your Task</h1>
                    <form className='text-center' onSubmit={editTask}>
                        <div className='flex flex-col md:flex-row gap-5 items-center justify-center'>
                            <input defaultValue={editTodo.taskName} name='task_name' className='px-4 py-3 outline-none border border-[#FF5733] mr-4 rounded' type="text" placeholder='Enter Your Task Name' required />
                            <input defaultValue={editTodo.iconURL} name='icon_url' className='px-4 py-3 outline-none border border-[#FF5733] mr-4 rounded' type="text" placeholder='Enter Icon URL  ' required />
                            <br />
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my-modal-3" className='bg-[#FF5733] px-4 py-3 rounded text-white text-xl font-bold mt-2 cursor-pointer'>Edit Task</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;