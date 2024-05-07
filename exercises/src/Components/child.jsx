import React from 'react'
import { useState } from 'react'

const child = () => {

  const [taskName ,setTaskName] = useState(null);
  const [startDate ,setStartDate] = useState(null);
  const [endDate ,setEndDate] = useState(null);
  const [taskDesc ,setTaskDesc] = useState(null);




  function handleTaskname(event){
    setTaskName(event.target.value)

  }


  function handleStartDate(event){
    setStartDate(event.target.value)

  }
  function handleEndDate(event){
    setEndDate(event.target.value)

  }
  function handleTaskDesc(event){
    setTaskDesc(event.target.value)

  }


  function handleSubmit(e){
    e.preventDefault()



    const myObj = {
      taskName: taskName,
      startDate:startDate,
      endDate:endDate,
      taskDesc:taskDesc,
    }

    console.log(myObj);
    
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
       <label htmlFor="">Task name</label><br />
       <input type="text" name="" id="" onChange={handleTaskname} value={taskName}/>
       <br />
       <label htmlFor="">start</label><br />
       <input type="date" onChange={handleStartDate} value={startDate} />
       <br />
       <label htmlFor="">end</label><br />
       <input type="date" onChange={handleEndDate} value={endDate} />
       <br />
       <label htmlFor="">desc</label><br />
       <input type="text" onChange={handleTaskDesc} value={taskDesc} />
       <br />

       <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default child