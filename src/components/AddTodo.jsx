import React from 'react';

const AddTodo = () => {
    return (
        <div>
            <h1 className='text-xl text-green-500'>Add Your Task</h1>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <form>
                <input type="text" placeholder='Enter Your Task Name' />
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default AddTodo;