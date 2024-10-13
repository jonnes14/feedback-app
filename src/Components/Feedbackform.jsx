import React from 'react'
import Card from './Shared/Card'
import Button from './Shared/Button'
import { useState,useContext,useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import RatingSelect from './RatingSelect'
function Feedbackform() {
  const [text,settext]=useState('')
  const [rating,setrating]=useState(10)
  const[btnDisabled,setbtnDisabled]=useState(true)
  const[message,setmessage]=useState('')
  const {addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext)
   useEffect(()=>{
            if(feedbackEdit.edit===true){
              setbtnDisabled(false)
              settext(feedbackEdit.item.text)
              setrating(feedbackEdit.item.rating)
            }
   },[feedbackEdit])
    const handleTextChange=(e)=>{
      if(text === ''){
        setbtnDisabled(true)
        setmessage(null)
      }
      else if(text !== '' && text.trim().length<10){
        setbtnDisabled(true)
        setmessage("Text must be atleast 10 characters ")
      }
      else{
        setmessage(null)  
        setbtnDisabled(false)
      }
      settext(e.target.value)
    }
    const handleSubmit =(e)=>{
      e.preventDefault()
      if(text.trim().length>=10){
        const newFeedback={
          text:text,
          rating
        }
        if(feedbackEdit.edit=== true){
          updateFeedback(feedbackEdit.item.id,newFeedback)
        }
        else{
          addFeedback(newFeedback)
        }
        addFeedback(newFeedback)
        settext('')
      }   
    }
  return (
   <Card>
    <form onSubmit={handleSubmit}>
      <h2>How would you rate Service with us?</h2>
      <RatingSelect select={(rating)=>setrating(rating)}/>
      <div className='input-group'>
        <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text}/>
        <Button type='submit' isDisabled={btnDisabled}>Send</Button>
      </div>
      {message && <div className='message'>{message}</div>}
    </form>
   </Card>
  )
}

export default Feedbackform
