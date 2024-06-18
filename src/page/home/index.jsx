import React, { useState } from 'react'
import Button from '../../component/button'
import Modal from '../../component/modal'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../features/demoSlice'
import { add } from '../../features/todoSlice'

function Home() {
  const [input , setInput] = useState("")
  const demo = useSelector((store) => store.demo)
  const [open, setOpen ] = useState(false)
  const dispatch = useDispatch()
  const handleOpneModal = () => {
    setOpen(true)
  }
  const handleIncrement= () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
  dispatch(decrement())
  }
  const handleCloseModal = () => {
    setOpen(false)
  }
  const handleAddNewTask = ()=>{
dispatch(
  add({
    title: input,
    status: "in-progress",
  })
)
  }
  
  return (
    <div>
      <h1>{demo}</h1>
     <Button  onClick={handleIncrement}> increment</Button>
     <Button onClick={handleDecrement}> decrement</Button>

     <input type="text" value={input} onChange={(e) => 
      setInput(e.target.value)
     }/>
     <Button onClick={handleAddNewTask}> add new task</Button>
    
    <Modal isOpen={open} onCancel={handleCloseModal} /></div>
  ) 
}

export default Home