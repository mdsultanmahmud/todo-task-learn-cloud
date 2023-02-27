import React, { useState } from 'react';

const DisplayTodo = () => {
    return (
        <div className='mx-20 px-20'>
            <div className='text-center'>
                <button className='px-8 py-4 font-bold bg-[#FF5733] hover:bg-[#6495ED] text-white mr-4'>All Task</button>
                <button className='px-8 py-4 font-bold bg-[#FF5733] hover:bg-[#6495ED] text-white'>Done Task</button>
            </div>
        </div>
    );
};

export default DisplayTodo;