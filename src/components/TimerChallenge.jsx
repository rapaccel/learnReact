import React, { useRef } from 'react'
import { useState } from 'react'
import ResultModal from './ResultModal';
export default function TimerChallenge({title,targetTime}) {
    const timer=useRef();
    const dialog=useRef();
    const [timeStarted,setTimeStarted]=useState(false);
    const [timeExpired,setTimeExpired]=useState(false);
    function handleStart(){
        timer.current=setTimeout(()=>{
            setTimeExpired(true);
            dialog.current.showModal();
        },1000 * targetTime);
        setTimeStarted(true)
    }
    function handleStop(){
        clearTimeout(timer.current);
    }
    return (
    <>
        <ResultModal ref={dialog} result='lost' targetTime={targetTime}/>
        <section className='challenge'>
            <h2>{title}</h2>
            {timeExpired && <p>You Lost</p>}
            <p className='challenge-time'>
                {targetTime} Second {targetTime >1 ?'s' : ''}
            </p>
            <p>
            <button onClick={timeStarted?handleStop:handleStart}>{timeStarted ? 'Stop' : 'Start'} Challenge</button>
            </p>
            <p className={timeStarted ? 'active' : ''}>
                {timeStarted ? 'Time is running' : 'Time is not running'}
            </p>
        </section>
    </>
    )
}
