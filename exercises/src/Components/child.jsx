import React from 'react'
import { useState } from 'react'
import '../App.css'

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
      <form action="" onSubmit={handleSubmit} className='form-container'>
       <label htmlFor="">Task name</label><br />
       <input type="text" name="" id="" onChange={handleTaskname} value={taskName}/>
       <br />
       <label htmlFor="">Starting Date</label><br />
       <input type="date" onChange={handleStartDate} value={startDate} />
       <br />
       <label htmlFor="">Ending Date</label><br />
       <input type="date" onChange={handleEndDate} value={endDate} />
       <br />
       <label htmlFor="">Task Description</label><br />
       <textarea name="" id="" onChange={handleTaskDesc} value={taskDesc}></textarea>
       
       <br />

       <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default child