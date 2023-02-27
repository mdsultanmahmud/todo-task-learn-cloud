import React from 'react';

const AddTodo = () => {
    return (
        <div>
            <h1>Add Your Task</h1>
            <form>
                <input type="text" placeholder='Enter Your Task Name'/>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default AddTodo;