import React, { useEffect, useState } from 'react'

function Poll(props) {
    const[currentPoll, setCurrentPoll]= useState(1)
    const [totalPoll, setTotalPoll]=useState(0);
    
    console.log('total', totalPoll, currentPoll);
    
    //console.log(props.jsonData);
    useEffect(()=>{
        const polls = props.jsonData.filter(poll => poll.category === "poll")
        console.log('poll',polls);
        setTotalPoll(polls.length); // 2 poll length
        },[])

    
    

  return (
    <div>Poll</div>
  )
}

export default Poll