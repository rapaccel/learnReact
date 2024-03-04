import React, { forwardRef } from 'react'


const ResultModal =forwardRef( function ResultModal({result,targetTime},ref) {
    return  (
    <dialog className='result-modal' ref={ref}>
        <h2>You {result}</h2>
        <p>You took {targetTime} seconds</p>
        <p>Good Job</p>
        <form action="dialog">
            <button>Close</button>
        </form>
    </dialog>
    );
})
export default ResultModal;