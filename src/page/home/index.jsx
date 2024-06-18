import React, { useState } from 'react'
import Button from '../../component/button'
import Modal from '../../component/modal'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../features/demoSlice'
import { add } from '../../features/todoSlice'
import "./index.scss"

function Home() {
  const [input , setInput] = useState("")
  const demoValue = useSelector((store) => store.demo)
  const [open, setOpen ] = useState(false)
  const dispatch = useDispatch()
  
  const handleAddNewTask = ()=>{
dispatch(
  add({
    title: input,
    status: "in-progress",
  })
)
  }
  
  return (
    <div className='home'>
<input value={input} type="text" className='home__input' onChange={(e) => setInput(e.target.value)} />
<Button onClick={handleAddNewTask}>Add new Task</Button>
<Table columns ={[] } dataSource={[]}></Table>
</div>
  ) 
}

export default Home